# __init__.py
# This file initializes the database module and sets up the database connection for the app.

from .session import Base, engine
from .models import Complaint, Victim, Alias, Evidence

# Create all tables in the database if they don't exist
Base.metadata.create_all(bind=engine)

