import mongoengine
import datetime

def validate(name):
  if name == 'John Doe':
    raise mongoengine.ValidationError("John Doe is not a valid name")

class User(mongoengine.Document):
  email = mongoengine.EmailField(required=True, max_length=255, unique=True)
  name = mongoengine.StringField(required=True, max_length=255, validation=validate)
  created_at = mongoengine.DateTimeField(default=datetime.datetime.now, required=True)
  deleted_at = mongoengine.DateTimeField(required=False)
