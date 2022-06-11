from email import header
from flask import request
from functools import wraps
from wtforms import Form
from app.controllers.api_controller import respondError
from enum import Enum
from multidict import MultiDict

class INPUT_POSITION(Enum):
  HEADER = 1
  QUERY = 2
  FORM = 3
  FORM_MULTIPART = 4
  JSON = 5
  FORM_QUERY = 6
  ALL = 7

def api(FormRequest: Form = None, typeinput: INPUT_POSITION = INPUT_POSITION.ALL):
  def wrapper(controller):
    @wraps(controller)
    def decorated(*args, **kwargs):
      input = findInput(typeinput)
      form = FormRequest(input)
      if not form.validate():
        return respondError(form.errors)
      return controller(*args, **kwargs)
    return decorated
  return wrapper

def findInput(typeinput: INPUT_POSITION):
  input = request.form
  if typeinput == INPUT_POSITION.HEADER:
    input = request.headers
  elif typeinput == INPUT_POSITION.QUERY:
    input = request.args
  elif typeinput == INPUT_POSITION.FORM:
    input = request.form
  elif typeinput == INPUT_POSITION.FORM_MULTIPART:
    input = MultiDict(**request.form, **request.files)
  elif typeinput == INPUT_POSITION.JSON:
    input = request.json
  elif typeinput == INPUT_POSITION.FORM_QUERY:
    input = request.values
  elif typeinput == INPUT_POSITION.ALL:
    json = request.json if request.is_json else {}
    input = MultiDict(**request.values, **request.files, **json)
  return input
