from flask import Flask
app = Flask(__name__)

import bin.config

from routes.api import api
from routes.web import web

app.register_blueprint(api)
app.register_blueprint(web)

