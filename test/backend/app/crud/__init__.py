# __init__.py
# Initializes the CRUD package and imports necessary modules for CRUD operations.

from .complaint import create_complaint, get_complaint, update_complaint
from .victim import create_victim, get_victim
from .alias import create_alias, get_alias

__all__ = [
    "create_complaint",
    "get_complaint",
    "update_complaint",
    "create_victim",
    "get_victim",
    "create_alias",
    "get_alias"
]

