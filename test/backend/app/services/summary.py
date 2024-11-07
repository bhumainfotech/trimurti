# summary.py
# This service file handles the generation of AI-based summaries using BART or a GPT-like model.

from transformers import BartForConditionalGeneration, BartTokenizer

# Load pre-trained BART model and tokenizer
bart_model = BartForConditionalGeneration.from_pretrained('facebook/bart-large-cnn')
bart_tokenizer = BartTokenizer.from_pretrained('facebook/bart-large-cnn')

def generate_summary(text: str, max_length: int = 130) -> str:
    """
    Generates a summary of the given text using BART.

    Args:
        text (str): The input text to summarize.
        max_length (int): The maximum length of the generated summary.

    Returns:
        str: The generated summary.
    """
    inputs = bart_tokenizer.encode("summarize: " + text, return_tensors='pt', max_length=1024, truncation=True)
    summary_ids = bart_model.generate(inputs, max_length=max_length, min_length=30, length_penalty=2.0, num_beams=4, early_stopping=True)
    summary = bart_tokenizer.decode(summary_ids[0], skip_special_tokens=True)
    return summary

