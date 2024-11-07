# classification.py
# This service file handles text classification using Logistic Regression and BERT.

import joblib
from transformers import BertTokenizer, BertForSequenceClassification
import torch

# Load pre-trained Logistic Regression model and vectorizer
logistic_model = joblib.load('models/logistic_regression_model.joblib')
vectorizer = joblib.load('models/tfidf_vectorizer.joblib')

# Load pre-trained BERT model and tokenizer
bert_model = BertForSequenceClassification.from_pretrained('bert-base-uncased')
bert_tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

def classify_text(text: str, use_bert: bool = False) -> str:
    """
    Classifies the given text using Logistic Regression or BERT.

    Args:
        text (str): The input text to classify.
        use_bert (bool): If True, use BERT for classification; otherwise, use Logistic Regression.

    Returns:
        str: The predicted category.
    """
    if use_bert:
        # Use BERT for classification
        inputs = bert_tokenizer(text, return_tensors='pt', max_length=512, truncation=True, padding=True)
        outputs = bert_model(**inputs)
        prediction = torch.argmax(outputs.logits, dim=1).item()
        return f"Predicted category (BERT): {prediction}"
    else:
        # Use Logistic Regression for classification
        vectorized_text = vectorizer.transform([text])
        prediction = logistic_model.predict(vectorized_text)[0]
        return f"Predicted category (Logistic Regression): {prediction}"

