from routes.api import api
from flask import request
from app.formrequest.registrationform import RegistrationForm
from app.formrequest.loginform import LoginForm
from app.controllers.api_controller import respondError, respondSuccess
from app.middlewares.oauth import oauth
from app.models.user import User
from bin.app import bcrypt
from app.middlewares.api import api as api_middleware
import jwt, os
from datetime import datetime, timedelta

def create_token(user):
  expires_at = datetime.utcnow() + timedelta(hours= 24)
  expires_at = expires_at.isoformat()
  token = jwt.encode(
    {"user_id": str(user.id), "expires_at": expires_at}, 
    os.environ['JWT_SECRET_KEY'], 
    algorithm="HS256"
  ).decode('UTF-8')
  return token, expires_at

@api.route('register', methods=['POST'])
@api_middleware(FormRequest= RegistrationForm)
def register():
  user = User(email=request.form["email"], name=request.form["username"], password=bcrypt.generate_password_hash(request.form["password"]))
  user.save()
  return respondSuccess(data="Register successfully", status=201)

@api.route('login', methods=['POST'])
@api_middleware(FormRequest= LoginForm)
def login():
  user = User.objects(email = request.form['email']).first()
  if not bcrypt.check_password_hash(user['password'], request.form['password']):
    return respondError('Wrong email or password', message='Wrong email or password', status=401)
  
  (token, expires_at) = create_token(user)
  user.password = None
  data = {
    "email": user['email'],
    "access_token": token,
    "expires_at": expires_at
  }

  return respondSuccess(data=data, status=200)

@api.route('user', methods=['GET'])
@oauth
def user(user):
  user = user.to_mongo().to_dict()
  del user['password']
  del user['_id']
  return respondSuccess(data=user)
