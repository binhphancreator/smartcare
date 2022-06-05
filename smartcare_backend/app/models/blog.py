import mongoengine
import datetime


class Blog(mongoengine.Document):
    title = mongoengine.StringField(required=True, max_length=255)
    author = mongoengine.StringField(required=True, max_length=255)
    imageUrl = mongoengine.StringField()
    description = mongoengine.StringField(required=True)
    text = mongoengine.StringField(max_length=999999)
    created_at = mongoengine.DateTimeField(default=datetime.datetime.now())
    modified_at = mongoengine.DateTimeField(default=datetime.datetime.now())
