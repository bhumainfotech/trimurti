# alias.py
# Contains CRUD operations for managing alias details in the database.

from sqlalchemy.orm import Session
from app.database.models import Alias
from app.schemas.alias import AliasCreate

def create_alias(db: Session, alias: AliasCreate):
    """
    Creates a new alias record in the database.

    Args:
        db (Session): The database session.
        alias (AliasCreate): The alias data.

    Returns:
        Alias: The created alias record.
    """
    db_alias = Alias(**alias.dict())
    db.add(db_alias)
    db.commit()
    db.refresh(db_alias)
    return db_alias

def get_alias(db: Session, alias_id: int):
    """
    Retrieves an alias record by ID.

    Args:
        db (Session): The database session.
        alias_id (int): The ID of the alias.

    Returns:
        Alias: The retrieved alias record or None.
    """
    return db.query(Alias).filter(Alias.id == alias_id).first()

