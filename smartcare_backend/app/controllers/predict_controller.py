from routes.api import api
from flask import request
from app.controllers.api_controller import respondError, respondSuccess
from Model_Knn import Knn_model as knn
from bin.config import base_path

fields = [
    "BMI",
    "Smoking",
    "AlcoholDrinking",
    "Stroke",
    "PhysicalHealth",
    "MentalHealth",
    "DiffWalking",
    "Sex",
    "AgeCategory",
    "Race",
    "Diabetic",
    "PhysicalActivity",
    "GenHealth",
    "SleepTime",
    "Asthma",
    "KidneyDisease",
    "SkinCancer"
]

features = []


@api.route('/predict', methods=['POST'])
def cancerPredict():
    for i in fields:
        if request.form[i] == None:
            return respondError("Missing field " + i, message="Missing field " + i, status=401)
        else:
            if i == "BMI":
                features.append(float(request.form[i]))
            else:
                features.append(int(request.form[i]))

    print(features)
    result = knn.makePrediction(
        base_path + "/Model_Knn/MODEL_KNN.sav", features)
    return respondSuccess(float(result[0]), status=200)
