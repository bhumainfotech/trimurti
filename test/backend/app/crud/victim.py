# victim.py
# Contains CRUD operations for managing victim details in the database.

from sqlalchemy.orm import Session
from app.database.models import Victim
from app.schemas.victim import VictimCreate

def create_victim(db: Session, victim: VictimCreate):
    """
    Creates a new victim record in the database.

    Args:
        db (Session): The database session.
        victim (VictimCreate): The victim data.

    Returns:
        Victim: The created victim record.
    """
    db_victim = Victim(**victim.dict())
    db.add(db_victim)
    db.commit()
    db.refresh(db_victim)
    return db_victim

def get_victim(db: Session, victim_id: int):
    """
    Retrieves a victim record by ID.

    Args:
        db (Session): The database session.
        victim_id (int): The ID of the victim.

    Returns:
        Victim: The retrieved victim record or None.
    """
    return db.query(Victim).filter(Victim.id == victim_id).first()

