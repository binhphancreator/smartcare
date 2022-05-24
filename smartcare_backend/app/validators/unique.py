import mongoengine
from wtforms import ValidationError

class Unique(object):
  def __init__(self, model: mongoengine.Document, namefield: str):
    self.model = model
    self.namefield = namefield
  
  def __call__(self, form, field):
    kwargs = {
      self.namefield: field.data
    }
    entity = self.model.objects(email=field.data).first()
    if entity != None:
      raise ValidationError(f"The {self.namefield} field is not unique") 

unique = Unique
