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
def cancerPredictBasic():
    for i in fields:
        if request.form[i] == None:
            return respondError("Missing field " + i, message="Missing field " + i, status=401)
        else:
            if i == "BMI":
                features.append(float(request.form[i]))
            else:
                features.append(int(request.form[i]))

    result = knn.makePrediction(
        base_path + "/Model_Knn/MODEL_KNN.sav", features, False)
    return respondSuccess(float(result[0]), status=200)


doctorFields = [
    "age",
    "anaemia",
    "creatinine_phosphokinase",
    "diabetes",
    "ejection_fraction",
    "high_blood_pressure",
    "platelets",
    "serum_creatinine",
    "serum_sodium",
    "sex",
    "smoking",
    "time"
]

doctorFeatures = []


@api.route('/predict/doctor', methods=['POST'])
def cancerPredictDoctor():
    for i in doctorFields:
        if request.form[i] == None:
            return respondError("Missing field " + i, message="Missing field " + i, status=401)
        else:
            if i == "platelets":
                doctorFeatures.append(int(request.form[i]))
            else:
                if i == "serum_creatinine":
                    doctorFeatures.append(float(request.form[i]))
                else:
                    doctorFeatures.append(int(request.form[i]))

    result = knn.makePrediction(
        base_path + "/Model_Knn/MODEL_KNN_DOCTOR.sav", doctorFeatures, True)
    return respondSuccess(float(result[0]), status=200)
