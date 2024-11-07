# __init__.py
# Initializes the services module for the backend application.
# This module provides utility functions and services for handling OCR, text classification, entity extraction, and summary generation.

from .ocr import extract_text_from_file
from .classification import classify_text
from .extraction import extract_entities
from .summary import generate_summary

__all__ = ["extract_text_from_file", "classify_text", "extract_entities", "generate_summary"]

