from routes.api import api
from flask import request
from app.formrequest.registrationform import RegistrationForm
from app.controllers.api_controller import respondErrorValidate, respondSuccess

@api.route('register', methods=['POST'])
def register():
  form = RegistrationForm(request.form)
  if form.validate():
    return respondSuccess(data="Register successfully", status=201)
  return respondErrorValidate(form.errors)
