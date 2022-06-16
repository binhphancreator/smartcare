import Knn_model as knn

#knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_2020_cleaned_all_numeral.csv', 'smartcare_backend\Model_Knn\MODEL_KNN.sav', False)
# knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_failure_clinical_records_dataset.csv',
#             'smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav', True)

features = [
    30.23, 1, 0, 0, 6, 2, 1, 0, 11, 5, 1, 1, 1, 8, 0, 1, 0
]
result = knn.makePrediction(
    'smartcare_backend\Model_Knn\MODEL_KNN.sav', features, False)
print(result)
