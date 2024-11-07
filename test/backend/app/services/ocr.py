# ocr.py
# This service file contains the OCR logic for extracting text from uploaded evidence files.

import pytesseract
from pdf2image import convert_from_path
from PIL import Image
import os

def extract_text_from_file(file_path: str) -> str:
    """
    Extracts text from an image or PDF file using Tesseract OCR.

    Args:
        file_path (str): The path to the file from which to extract text.

    Returns:
        str: Extracted text from the file.
    """
    text = ""
    file_extension = os.path.splitext(file_path)[1].lower()

    if file_extension in ['.jpg', '.jpeg', '.png']:
        # Handle image files
        image = Image.open(file_path)
        text = pytesseract.image_to_string(image)
    elif file_extension == '.pdf':
        # Handle PDF files
        images = convert_from_path(file_path)
        for image in images:
            text += pytesseract.image_to_string(image) + "\n"
    else:
        raise ValueError("Unsupported file format for OCR")

    return text.strip()

