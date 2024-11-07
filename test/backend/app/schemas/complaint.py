# complaint.py
# This file defines the Pydantic schemas for handling complaint data.

from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class ComplaintBase(BaseModel):
    acknowledgement_number: str = Field(..., description="Unique ID assigned to each complaint")
    category_of_complaint: str = Field(..., description="The type of complaint (e.g., Online Financial Fraud)")
    money_lost: bool = Field(..., description="Indicates if the victim lost money")
    date: datetime = Field(..., description="Approximate date and time of the incident")
    delay_in_reporting: bool = Field(..., description="Indicates if there was a delay in reporting")
    description: Optional[str] = Field(None, description="Detailed description of the incident")
    uploaded_files_count: Optional[int] = Field(None, description="Number of uploaded files as evidence")
    police_station: Optional[str] = Field(None, description="Name of the police station handling the case")
    pincode: Optional[str] = Field(None, description="Pincode of the complainant’s address")

class ComplaintCreate(ComplaintBase):
    pass  # No additional fields required for creating a complaint

class ComplaintUpdate(BaseModel):
    category_of_complaint: Optional[str] = None
    money_lost: Optional[bool] = None
    date: Optional[datetime] = None
    delay_in_reporting: Optional[bool] = None
    description: Optional[str] = None
    uploaded_files_count: Optional[int] = None
    police_station: Optional[str] = None
    pincode: Optional[str] = None

class ComplaintResponse(ComplaintBase):
    id: int = Field(..., description="Unique identifier for the complaint")

    class Config:
        orm_mode = True

