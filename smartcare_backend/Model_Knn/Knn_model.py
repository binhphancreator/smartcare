# Importing the libraries
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.neighbors import KNeighborsClassifier
from sklearn.metrics import confusion_matrix, accuracy_score
import pickle
from bin.config import base_path


confusionMatrix = [[0.0, 0.0], [0.0, 0.0]]
accuracy = 0.0


def PrepareDataset(dataset, isForDoctor):
    if isForDoctor:
        X = dataset.iloc[:, 0:13].values
        # print(np.shape(X))
        y = dataset.iloc[:, 13].values
        # print(y)
        return X, y
    else:
        X = dataset.iloc[:, 1:18].values
        y = dataset.iloc[:, 0].values
        return X, y


def BuidlKNN(datasetPath, outputModel, isForDoctor):

    # Importing the dataset
    dataset = pd.read_csv(datasetPath)
    X, y = PrepareDataset(dataset, isForDoctor)

    # # Transform text value to number
    # le = LabelEncoder()

    # for i in range(17):
    #     if(i != 0 and i != 4 and i!=5 and i!=13):
    #         X[:, i] = le.fit_transform(X[:,i])

    # y = le.fit_transform(y)

    # Splitting the dataset into the Training set and Test set
    X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=0)

    # Feature Scaling
    sc = StandardScaler()
    X_train = sc.fit_transform(X_train)
    X_test = sc.transform(X_test)

    # Training the K-NN model on the Training set
    classifier = KNeighborsClassifier(n_neighbors=5, metric='minkowski', p=2)
    classifier.fit(X_train, y_train)

    # Predicting the Test set results
    y_pred = classifier.predict(X_test)

    # Making the Confusion Matrix
    cm = confusion_matrix(y_test, y_pred)
    ac = accuracy_score(y_test, y_pred)

    confusionMatrix = cm
    accuracy = ac

    print("Confusion matrix : \n", cm)
    print("Accuarcy : ", ac)

    # save the model to disk
    pickle.dump(classifier, open(outputModel, 'wb'))


def getComfusionMatrix():
    return confusionMatrix


def getAccuracy():
    return accuracy


def makePrediction(model_link, features, isForDoctor):

    # Splitting the dataset into the Training set and Test set
    datasetDoctor = pd.read_csv(base_path + '/Model_Knn/Dataset/heart_doctor_cleaned_data_new.csv')

    if isForDoctor:
        features = np.reshape(features, (-1, 13))
    else:
        features = np.reshape(features, (-1, 17))

    if isForDoctor :
        dataset = datasetDoctor
        X, y = PrepareDataset(dataset, isForDoctor)

        # Splitting the dataset into the Training set and Test set
        X_train, X_test, y_train, y_test = train_test_split(
        X, y, test_size=0.20, random_state=0)
        
        # Feature Scaling
        sc = StandardScaler()
        X_train = sc.fit_transform(X_train)
        
        features = sc.transform(features)

    print(model_link, features)

    model = pickle.load(open(model_link, 'rb'))

    print("feature reshaped ", features)
    result = model.predict_proba(features)
    return result[0]
