# __init__.py
# Initializes the schemas module for the backend application.
from .complaint import ComplaintCreate, ComplaintUpdate, ComplaintResponse
from .victim import VictimCreate, VictimResponse
from .alias import AliasCreate, AliasResponse

__all__ = ["ComplaintCreate", "ComplaintUpdate", "ComplaintResponse", "VictimCreate", "VictimResponse", "AliasCreate", "AliasResponse"]

