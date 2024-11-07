# evidence.py
# This file contains the router for handling evidence uploads and processing.

from fastapi import APIRouter, Depends, UploadFile, File, HTTPException
from sqlalchemy.orm import Session
from app.crud import create_evidence_record
from app.services.ocr import process_evidence_file
from app.database.session import get_db

router = APIRouter(prefix="/api/evidence", tags=["Evidence"])

@router.post("/upload", response_model=dict)
async def upload_evidence(complaint_id: int, file: UploadFile = File(...), db: Session = Depends(get_db)):
    """
    Endpoint to upload an evidence file linked to a specific complaint.
    """
    # Process the uploaded file using OCR
    ocr_result = process_evidence_file(file)

    # Save the evidence record in the database
    evidence_record = create_evidence_record(db, complaint_id, file, ocr_result)

    if not evidence_record:
        raise HTTPException(status_code=400, detail="Failed to process and save evidence")

    return {"message": "Evidence uploaded successfully", "evidence": evidence_record}

