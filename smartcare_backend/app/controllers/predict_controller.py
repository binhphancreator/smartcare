from routes.api import api
from flask import request
from app.controllers.api_controller import respondError, respondSuccess
from app.models.prediction import Prediction
from app.middlewares.oauth import oauth
from app.middlewares.ouser import ouser
from Model_Knn import Knn_model as knn
from bin.config import base_path

@api.route('/predict/doctor', methods=['POST'])
def cancerPredictDoctor():
    doctorFeatures = []
    doctorFields = [
        "age",
        "currentSmoker",
        "cigsPerDay",
        "BPMeds",
        "prevalentStroke",
        "prevalentHyp",
        "diabetes",
        "totChol",
        "sysBP",
        "diaBP",
        "BMI",
        "heartRate",
        "glucose"
    ]

    for i in doctorFields:
        if request.form[i] == None:
            return respondError("Missing field " + i, message="Missing field " + i, status=401)
        else:
            if i == "BMI":
                doctorFeatures.append(float(request.form[i]))
            else:
                doctorFeatures.append(int(request.form[i]))

    result = knn.makePrediction(
        base_path + "/Model_Knn/MODEL_KNN_DOCTOR.sav", doctorFeatures, True)
    return respondSuccess(data=float(result[0] * 100), status=200)

@api.route('/predict', methods=['POST'])
@ouser
def cancerPredictBasic(user):
    features = []
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

    if user != None:
        userId = str(user['id'])
        prediction = Prediction(
            userId=userId,
            BMI=request.form["BMI"],
            Smoking=request.form["Smoking"],
            AlcoholDrinking=request.form["AlcoholDrinking"],
            Stroke=request.form["Stroke"],
            PhysicalHealth=request.form["PhysicalHealth"],
            MentalHealth=request.form["MentalHealth"],
            DiffWalking=request.form["DiffWalking"],
            Sex=request.form["Sex"],
            AgeCategory=request.form["AgeCategory"],
            Race=request.form["Race"],
            Diabetic=request.form["Diabetic"],
            PhysicalActivity=request.form["PhysicalActivity"],
            GenHealth=request.form["GenHealth"],
            SleepTime=request.form["SleepTime"],
            Asthma=request.form["Asthma"],
            KidneyDisease=request.form["KidneyDisease"],
            SkinCancer=request.form["SkinCancer"],
            HeartDisease=str(result[1] * 100)
        )
        prediction.save()
    return respondSuccess(float(result[1] * 100), status=200)


@api.route('/predict', methods=['GET'])
def getAllPredictions():
    predicts = Prediction.objects()
    # (id=id)
    return respondSuccess(data=predicts)
