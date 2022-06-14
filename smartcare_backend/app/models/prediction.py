import mongoengine
import datetime


class Prediction(mongoengine.Document):
    userId = mongoengine.ObjectIdField(required=True)
    BMI = mongoengine.FloatField(required=True)
    Smoking = mongoengine.IntField(required=True)
    AlcoholDrinking = mongoengine.IntField(required=True)
    Stroke = mongoengine.IntField(required=True)
    PhysicalHealth = mongoengine.IntField(required=True)
    MentalHealth = mongoengine.IntField(required=True)
    DiffWalking = mongoengine.IntField(required=True)
    Sex = mongoengine.IntField(required=True)
    AgeCategory = mongoengine.IntField(required=True)
    Race = mongoengine.IntField(required=True)
    Diabetic = mongoengine.IntField(required=True)
    PhysicalActivity = mongoengine.IntField(required=True)
    GenHealth = mongoengine.IntField(required=True)
    SleepTime = mongoengine.IntField(required=True)
    Asthma = mongoengine.IntField(required=True)
    KidneyDisease = mongoengine.IntField(required=True)
    SkinCancer = mongoengine.IntField(required=True)
    HeartDisease = mongoengine.FloatField(required=True)
