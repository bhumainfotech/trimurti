# classifier.py
# This module handles classification logic using Logistic Regression and BERT models.

import joblib
from sklearn.feature_extraction.text import TfidfVectorizer
from transformers import BertTokenizer, BertForSequenceClassification
import torch
import numpy as np

# Load pre-trained Logistic Regression model and vectorizer
logistic_model = joblib.load('models/logistic_regression_model.joblib')
tfidf_vectorizer = joblib.load('models/tfidf_vectorizer.joblib')

# Load pre-trained BERT model for classification
bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')
bert_model = BertForSequenceClassification.from_pretrained('bert-base-uncased')

def classify_text(text, model_type='logistic'):
    """
    Classifies the given text using the specified model.

    Args:
        text (str): The text to classify.
        model_type (str): The type of model to use ('logistic' or 'bert').

    Returns:
        dict: The classification result with the predicted category and risk level.
    """
    if model_type == 'logistic':
        vectorized_text = tfidf_vectorizer.transform([text])
        prediction = logistic_model.predict(vectorized_text)[0]
        return {"model": "Logistic Regression", "category": prediction}

    elif model_type == 'bert':
        inputs = bert_tokenizer(text, return_tensors="pt", max_length=512, truncation=True, padding="max_length")
        outputs = bert_model(**inputs)
        logits = outputs.logits
        predicted_class = np.argmax(logits.detach().numpy(), axis=1)[0]
        return {"model": "BERT", "category": predicted_class}

    else:
        raise ValueError("Invalid model type. Choose 'logistic' or 'bert'.")

