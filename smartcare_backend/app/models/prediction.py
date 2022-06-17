import mongoengine
import datetime


class Prediction(mongoengine.Document):
    userId = mongoengine.StringField(required=False)
    BMI = mongoengine.StringField(required=True)
    Smoking = mongoengine.StringField(required=True)
    AlcoholDrinking = mongoengine.StringField(required=True)
    Stroke = mongoengine.StringField(required=True)
    PhysicalHealth = mongoengine.StringField(required=True)
    MentalHealth = mongoengine.StringField(required=True)
    DiffWalking = mongoengine.StringField(required=True)
    Sex = mongoengine.StringField(required=True)
    AgeCategory = mongoengine.StringField(required=True)
    Race = mongoengine.StringField(required=True)
    Diabetic = mongoengine.StringField(required=True)
    PhysicalActivity = mongoengine.StringField(required=True)
    GenHealth = mongoengine.StringField(required=True)
    SleepTime = mongoengine.StringField(required=True)
    Asthma = mongoengine.StringField(required=True)
    KidneyDisease = mongoengine.StringField(required=True)
    SkinCancer = mongoengine.StringField(required=True)
    HeartDisease = mongoengine.StringField(required=True)
