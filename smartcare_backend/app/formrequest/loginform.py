from wtforms import Form, BooleanField, StringField, PasswordField, validators
from app.validators.exist import exist
from app.models.user import User

class LoginForm(Form):
  email = StringField('Email Address', [validators.Length(min=6, max=35), exist(model=User, namefield="email")])
  password = PasswordField('New Password', [ validators.DataRequired() ])
