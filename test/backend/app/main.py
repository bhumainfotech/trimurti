# main.py
# The entry point for the FastAPI backend application.

from fastapi import FastAPI
from app.routers import complaints, evidence
from app.database import models, session
from app.database.session import engine

# Create database tables
models.Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Trimurti 2.0 Cybercrime Management System",
    description="A comprehensive system for managing cybercrime complaints and evidence.",
    version="2.0.0"
)

# Include routers
app.include_router(complaints.router)
app.include_router(evidence.router)

@app.get("/")
def read_root():
    return {"message": "Welcome to the Trimurti 2.0 Cybercrime Management System"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

