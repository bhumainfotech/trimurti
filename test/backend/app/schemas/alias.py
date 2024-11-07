# alias.py
# This file defines the Pydantic schemas for handling alias (suspect) data.

from pydantic import BaseModel, Field
from typing import Optional

class AliasBase(BaseModel):
    suspect_name: Optional[str] = Field(None, description="Name of the suspect")
    id_type: Optional[str] = Field(None, description="Type of suspect's ID")
    id_number: Optional[str] = Field(None, description="ID number of the suspect")
    country: Optional[str] = Field(None, description="Suspect's country of residence")
    address: Optional[str] = Field(None, description="Suspect's address details")

class AliasCreate(AliasBase):
    complaint_id: int = Field(..., description="ID of the associated complaint")

class AliasResponse(AliasBase):
    id: int = Field(..., description="Unique identifier for the alias record")

    class Config:
        orm_mode = True

