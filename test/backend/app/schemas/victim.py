# victim.py
# This file defines the Pydantic schemas for handling victim data.

from pydantic import BaseModel, Field
from datetime import datetime
from typing import Optional

class VictimBase(BaseModel):
    transaction_id: Optional[str] = Field(None, description="Unique ID for the financial transaction")
    account_number: Optional[str] = Field(None, description="Victim's account number (partially masked)")
    transaction_date: Optional[datetime] = Field(None, description="Date of the fraudulent transaction")
    amount: Optional[float] = Field(None, description="Amount involved in the fraud")
    bank_reference_no: Optional[str] = Field(None, description="Bank reference number for the transaction")
    sub_category: Optional[str] = Field(None, description="Type of fraud (e.g., Debit/Credit Card)")
    bank_name: Optional[str] = Field(None, description="Name of the bank involved")

class VictimCreate(VictimBase):
    complaint_id: int = Field(..., description="ID of the associated complaint")

class VictimResponse(VictimBase):
    id: int = Field(..., description="Unique identifier for the victim record")

    class Config:
        orm_mode = True

