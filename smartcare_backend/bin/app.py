from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}}, support_credentials=True)
bcrypt = Bcrypt(app)

import bin.config

from routes.api import api
from routes.web import web

app.register_blueprint(api)
app.register_blueprint(web)

