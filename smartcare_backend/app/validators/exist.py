import mongoengine
from wtforms import ValidationError

class Exist(object):
  def __init__(self, model: mongoengine.Document, namefield: str):
    self.model = model
    self.namefield = namefield
  
  def __call__(self, form, field):
    kwargs = {
      self.namefield: field.data
    }
    entity = self.model.objects(**kwargs).first()
    if entity is None:
      raise ValidationError(f"The {self.namefield} field is not exist") 

exist = Exist
