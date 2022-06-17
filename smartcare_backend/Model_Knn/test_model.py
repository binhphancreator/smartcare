import Knn_model as knn

#knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_2020_cleaned_all_numeral.csv', 'smartcare_backend\Model_Knn\MODEL_KNN.sav', False)
knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_doctor_cleaned_data_new.csv',
            'smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav', True)

# # features = [
# #     30.23, 1, 0, 0, 6, 2, 1, 0, 11, 5, 1, 1, 1, 8, 0, 1, 0
# # ]
features = [41,0,0,1,0,1,0,332,124,88,31.31,65,84]
result = knn.makePrediction(
    'smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav', features, True)
print(result)
