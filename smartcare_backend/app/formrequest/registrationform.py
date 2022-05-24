from wtforms import Form, BooleanField, StringField, PasswordField, validators
from app.validators.unique import unique
from app.models.user import User

class RegistrationForm(Form):
  username = StringField('Username', [validators.Length(min=4, max=25)])
  email = StringField('Email Address', [validators.Length(min=6, max=35), unique(model=User, namefield="email")])
  password = PasswordField('New Password', [
    validators.DataRequired(),
    validators.EqualTo('password_confirm', message='Passwords must match')
  ])
  password_confirm = PasswordField('Repeat Password')
