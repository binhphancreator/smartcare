from dotenv import load_dotenv
import os

bin_path = os.path.dirname(__file__)
base_path = os.path.dirname(bin_path)
env_path = "../.env"
logs_path = "/logs/flask"
load_dotenv(env_path)

if not os.path.exists(logs_path):
  os.makedirs(logs_path)

import logging
logging.basicConfig(filename=os.path.join(logs_path, "app.log"), level=logging.DEBUG, format=f'%(asctime)s %(levelname)s %(name)s %(threadName)s : %(message)s')

from bin.app import app
from flask_mongoengine import MongoEngine

app.config['MONGODB_SETTINGS'] = {
  "db": os.getenv("MONGO_DB"),
  'host': os.getenv("MONGO_HOST", "localhost"),
  "port": os.getenv("MONGO_PORT", 27017),
  # "username": os.getenv("MONGO_USER", "smartcare"),
  # "password": os.getenv("MONGO_PASSWORD", "smartcare"),
}

db = MongoEngine(app)
