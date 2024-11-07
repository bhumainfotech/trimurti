# __init__.py
# Initializes the model_trainer module for the backend application.
# This module includes scripts and logic for training machine learning models.

from .train_pipeline import train_logistic_regression, train_bert_model

__all__ = ["train_logistic_regression", "train_bert_model"]

