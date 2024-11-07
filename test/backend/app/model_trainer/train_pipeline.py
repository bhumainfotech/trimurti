# train_pipeline.py
# This file contains logic for training the Logistic Regression and BERT models.

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import classification_report
import joblib
from transformers import BertTokenizer, BertForSequenceClassification, Trainer, TrainingArguments

def train_logistic_regression(data_path="data/processed_complaints.csv"):
    """
    Trains a Logistic Regression model for complaint classification.

    Args:
        data_path (str): Path to the CSV data file.

    Returns:
        None
    """
    # Load data
    data = pd.read_csv(data_path)
    X = data['description']
    y = data['category']

    # Preprocessing
    vectorizer = TfidfVectorizer(stop_words='english', max_features=5000)
    X_vect = vectorizer.fit_transform(X)

    # Train-Test Split
    X_train, X_test, y_train, y_test = train_test_split(X_vect, y, test_size=0.2, random_state=42)

    # Model Training
    model = LogisticRegression()
    model.fit(X_train, y_train)

    # Evaluation
    y_pred = model.predict(X_test)
    print(classification_report(y_test, y_pred))

    # Save Model and Vectorizer
    joblib.dump(model, 'models/logistic_regression_model.joblib')
    joblib.dump(vectorizer, 'models/tfidf_vectorizer.joblib')

def train_bert_model(data_path="data/processed_complaints.csv"):
    """
    Trains a BERT model for complaint classification.

    Args:
        data_path (str): Path to the CSV data file.

    Returns:
        None
    """
    # Load data
    data = pd.read_csv(data_path)
    tokenizer = BertTokenizer.from_pretrained('bert-base-uncased')

    # Tokenize the data
    inputs = tokenizer(data['description'].tolist(), padding=True, truncation=True, return_tensors='pt')

    # Create BERT model
    model = BertForSequenceClassification.from_pretrained('bert-base-uncased', num_labels=len(data['category'].unique()))

    # Define training arguments
    training_args = TrainingArguments(
        output_dir='./results',
        num_train_epochs=3,
        per_device_train_batch_size=4,
        per_device_eval_batch_size=4,
        warmup_steps=500,
        weight_decay=0.01,
        logging_dir='./logs',
        logging_steps=10,
    )

    # Create Trainer instance
    trainer = Trainer(
        model=model,
        args=training_args,
        train_dataset=inputs,
    )

    # Train model
    trainer.train()

    # Save the model
    model.save_pretrained('models/bert_model')
    tokenizer.save_pretrained('models/bert_tokenizer')

