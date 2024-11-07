# complaints.py
# This file contains the router for handling complaint-related API endpoints.

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from app.crud import create_complaint, get_complaint, update_complaint
from app.schemas.complaint import ComplaintCreate, ComplaintUpdate
from app.database.session import get_db

router = APIRouter(prefix="/api/complaints", tags=["Complaints"])

@router.post("/", response_model=dict)
def submit_complaint(complaint: ComplaintCreate, db: Session = Depends(get_db)):
    """
    Endpoint to submit a new complaint.
    """
    return create_complaint(db, complaint)

@router.get("/{complaint_id}", response_model=dict)
def read_complaint(complaint_id: int, db: Session = Depends(get_db)):
    """
    Endpoint to get a complaint by ID.
    """
    complaint = get_complaint(db, complaint_id)
    if not complaint:
        raise HTTPException(status_code=404, detail="Complaint not found")
    return complaint

@router.put("/{complaint_id}", response_model=dict)
def update_existing_complaint(complaint_id: int, complaint_update: ComplaintUpdate, db: Session = Depends(get_db)):
    """
    Endpoint to update an existing complaint.
    """
    return update_complaint(db, complaint_id, complaint_update)

