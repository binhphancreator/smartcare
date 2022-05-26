import mongoengine
import datetime

class User(mongoengine.Document):
  email = mongoengine.EmailField(required=True, max_length=255, unique=True)
  name = mongoengine.StringField(required=True, max_length=255)
  password = mongoengine.StringField(required=True, max_length=255)
  created_at = mongoengine.DateTimeField(default=datetime.datetime.now, required=True)
  deleted_at = mongoengine.DateTimeField(required=False)
