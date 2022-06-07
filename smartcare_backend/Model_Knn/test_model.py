import Knn_model as knn

#knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_2020_cleaned_all_numeral.csv', 'smartcare_backend\Model_Knn\MODEL_KNN.sav', False)
knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_failure_clinical_records_dataset.csv', 'smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav', True)

features = [45,0,7702,1,25,1,390000,1,139,1,0,60]
result = knn.makePrediction('smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav',features,True)
print(result)