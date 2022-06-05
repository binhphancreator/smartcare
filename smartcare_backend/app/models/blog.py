import mongoengine
import datetime


class Blog(mongoengine.Document):
    title = mongoengine.StringField(required=True, max_length=255)
    author = mongoengine.StringField(required=True, max_length=255)
    imageUrl = mongoengine.StringField(required=True)
    description = mongoengine.StringField(required=True)
    text = mongoengine.StringField(required=True, max_length=999999)
    createDate = mongoengine.DateTimeField(default=datetime.datetime.now())
    modifyDate = mongoengine.DateTimeField(default=datetime.datetime.now())
