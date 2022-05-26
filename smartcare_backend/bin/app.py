from flask import Flask
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)

import bin.config

from routes.api import api
from routes.web import web

app.register_blueprint(api)
app.register_blueprint(web)

