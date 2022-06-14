import mongoengine
import datetime

class SavedUser(mongoengine.Document):
    userId = mongoengine.ObjectIdField(required=True)
