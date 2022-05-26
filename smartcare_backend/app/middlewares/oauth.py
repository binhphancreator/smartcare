import jwt
import os
from flask import request
from functools import wraps
from app.models.user import User
from datetime import datetime
from app.controllers.api_controller import respondError
from app.models.user import User

def oauth(controller):
  @wraps(controller)
  def decorated(*args, **kwargs):
    token = None

    if "Authorization" in request.headers:
      auth_token = request.headers["Authorization"]
      if auth_token.find("Bearer ") == 0:
        token = auth_token.replace("Bearer ", "").replace("  ", " ").strip(" ")

    if token == None or len(token) == 0:
      return respondError(errors="Unauthorized", status=401)

    data = jwt.decode(token, os.getenv("JWT_SECRET_KEY"), algorithms=["HS256"])
    if datetime.now() > datetime.fromisoformat(data['expires_at']):
      return respondError(errors="Token expired", status=401)

    user = User.objects(id=data['user_id']).first()

    return controller(user, *args, **kwargs)

  return decorated
