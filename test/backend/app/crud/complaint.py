# complaint.py
# Contains CRUD operations for handling complaints in the database.

from sqlalchemy.orm import Session
from app.database.models import Complaint
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate

def create_complaint(db: Session, complaint: ComplaintCreate):
    """
    Creates a new complaint record in the database.

    Args:
        db (Session): The database session.
        complaint (ComplaintCreate): The complaint data.

    Returns:
        Complaint: The created complaint record.
    """
    db_complaint = Complaint(**complaint.dict())
    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)
    return db_complaint

def get_complaint(db: Session, complaint_id: int):
    """
    Retrieves a complaint record by ID.

    Args:
        db (Session): The database session.
        complaint_id (int): The ID of the complaint.

    Returns:
        Complaint: The retrieved complaint record or None.
    """
    return db.query(Complaint).filter(Complaint.id == complaint_id).first()

def update_complaint(db: Session, complaint_id: int, complaint_update: ComplaintUpdate):
    """
    Updates an existing complaint record.

    Args:
        db (Session): The database session.
        complaint_id (int): The ID of the complaint to update.
        complaint_update (ComplaintUpdate): The updated complaint data.

    Returns:
        Complaint: The updated complaint record or None.
    """
    db_complaint = get_complaint(db, complaint_id)
    if db_complaint:
        for key, value in complaint_update.dict(exclude_unset=True).items():
            setattr(db_complaint, key, value)
        db.commit()
        db.refresh(db_complaint)
    return db_complaint

