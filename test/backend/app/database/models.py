# models.py
# This file contains all the database models for the application.

from sqlalchemy import Column, Integer, String, Float, Boolean, DateTime, Text, ForeignKey, JSON
from sqlalchemy.orm import relationship
from .session import Base

class Complaint(Base):
    __tablename__ = 'complaints'
    id = Column(Integer, primary_key=True, index=True)
    acknowledgement_number = Column(String, unique=True, index=True, nullable=False)
    category_of_complaint = Column(String, nullable=False)
    money_lost = Column(Boolean, nullable=False)
    date = Column(DateTime, nullable=False)
    delay_in_reporting = Column(Boolean, nullable=False)
    description = Column(Text, nullable=True)
    uploaded_files_count = Column(Integer, nullable=True)
    police_station = Column(String, nullable=True)
    pincode = Column(String, nullable=True)

    # Relationships
    victim = relationship("Victim", back_populates="complaint", uselist=False)
    evidence = relationship("Evidence", back_populates="complaint")

class Victim(Base):
    __tablename__ = 'victims'
    id = Column(Integer, primary_key=True, index=True)
    transaction_id = Column(String, unique=True, nullable=True)
    account_number = Column(String, nullable=True)
    transaction_date = Column(DateTime, nullable=True)
    amount = Column(Float, nullable=True)
    bank_reference_no = Column(String, nullable=True)
    sub_category = Column(String, nullable=True)
    bank_name = Column(String, nullable=True)
    complaint_id = Column(Integer, ForeignKey('complaints.id'))

    # Relationships
    complaint = relationship("Complaint", back_populates="victim")

class Alias(Base):
    __tablename__ = 'aliases'
    id = Column(Integer, primary_key=True, index=True)
    suspect_name = Column(String, nullable=True)
    id_type = Column(String, nullable=True)
    id_number = Column(String, nullable=True)
    country = Column(String, nullable=True)
    address = Column(Text, nullable=True)
    complaint_id = Column(Integer, ForeignKey('complaints.id'))

class Evidence(Base):
    __tablename__ = 'evidence'
    id = Column(Integer, primary_key=True, index=True)
    file_id = Column(String, unique=True, nullable=False)
    complaint_id = Column(Integer, ForeignKey('complaints.id'))
    file_name = Column(String, nullable=False)
    file_type = Column(String, nullable=False)
    file_format = Column(String, nullable=False)
    file_path = Column(String, nullable=False)
    file_size = Column(Float, nullable=True)
    upload_timestamp = Column(DateTime, nullable=True)
    source_application = Column(String, nullable=True)
    ocr_extracted_text = Column(Text, nullable=True)
    file_hash_sha256 = Column(String, nullable=True)
    file_hash_md5 = Column(String, nullable=True)
    document_classification = Column(String, nullable=True)
    processing_status = Column(String, nullable=True)
    extracted_entities = Column(JSON, nullable=True)
    thumbnail_path = Column(String, nullable=True)
    sensitive_data_flag = Column(Boolean, nullable=True)
    indexed_for_search = Column(Boolean, nullable=True)
    comments = Column(Text, nullable=True)

    # Relationships
    complaint = relationship("Complaint", back_populates="evidence")

