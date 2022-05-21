from routes.web import web
from app.models.user import User

@web.route('/', methods=['GET'])
def home():
  user = User(email="tienkhach19@gmail.com", name="Phan Van Binh")
  user.save()
  return user.to_json()
