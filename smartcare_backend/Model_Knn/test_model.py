import Knn_model as knn

#knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_2020_cleaned_all_numeral.csv', 'smartcare_backend\Model_Knn\MODEL_KNN.sav', False)
knn.BuidlKNN('smartcare_backend\Model_Knn\Dataset\heart_failure_clinical_records_dataset.csv', 'smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav', True)

features = [55,0,1199,0,20,0,263358.03,1.83,134,1,1,241]
result = knn.makePrediction('smartcare_backend\Model_Knn\MODEL_KNN_DOCTOR.sav',features,True)
print(result)