# helpers.py
# Contains utility functions for file handling and other common tasks.

import hashlib
import os

def save_file(file, upload_dir="uploads"):
    """
    Saves an uploaded file to the specified directory.

    Args:
        file: The file object to save.
        upload_dir (str): Directory where the file should be saved.

    Returns:
        str: Path to the saved file.
    """
    if not os.path.exists(upload_dir):
        os.makedirs(upload_dir)

    file_path = os.path.join(upload_dir, file.filename)
    with open(file_path, "wb") as f:
        f.write(file.file.read())

    return file_path

def generate_file_hash(file_path, hash_type="sha256"):
    """
    Generates a hash for a file (e.g., SHA256 or MD5).

    Args:
        file_path (str): Path to the file to hash.
        hash_type (str): The type of hash to generate (default: 'sha256').

    Returns:
        str: The computed hash value.
    """
    hash_func = hashlib.sha256() if hash_type == "sha256" else hashlib.md5()
    with open(file_path, "rb") as f:
        while chunk := f.read(8192):
            hash_func.update(chunk)

    return hash_func.hexdigest()

