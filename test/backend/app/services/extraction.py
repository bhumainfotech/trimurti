# extraction.py
# This service file handles entity extraction using spaCy and BERT.

import spacy
import json

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

def extract_entities(text: str) -> dict:
    """
    Extracts entities from the given text using spaCy.

    Args:
        text (str): The input text for entity extraction.

    Returns:
        dict: A dictionary containing extracted entities.
    """
    doc = nlp(text)
    entities = {
        "names": [ent.text for ent in doc.ents if ent.label_ == "PERSON"],
        "locations": [ent.text for ent in doc.ents if ent.label_ == "GPE"],
        "dates": [ent.text for ent in doc.ents if ent.label_ == "DATE"],
        "orgs": [ent.text for ent in doc.ents if ent.label_ == "ORG"],
        "money": [ent.text for ent in doc.ents if ent.label_ == "MONEY"],
        "emails": [token.text for token in doc if token.like_email],
        "phone_numbers": [token.text for token in doc if token.like_num and len(token.text) >= 10]
    }
    return json.dumps(entities, indent=2)

