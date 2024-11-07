# Trimurti 2.0 Cybercrime Management System

## Overview
Trimurti 2.0 is an advanced cybercrime management system that facilitates the submission, processing, and analysis of cybercrime complaints. The system incorporates machine learning models, NLP techniques, and an interactive chatbot to aid citizens and law enforcement agencies.

## Project Structure
- **backend/**: Contains the FastAPI backend logic, CRUD operations, and data processing modules.
- **chatbot/**: Rasa chatbot to guide users through reporting and understanding various types of cybercrimes.
- **frontend/**: React-based frontend for user interactions.
- **data/**: Sample data for testing purposes.
- **docker-compose.yml**: Orchestrates the multi-container deployment.
- **LICENSE**: License information.

## Features
- **Entity Extraction & Summarization**: Uses BERT and spaCy for extracting entities and generating summaries.
- **Multilingual Support**: Offers translation capabilities for Indian languages.
- **ML Model Training**: Utilizes Logistic Regression and BERT for complaint categorization.
- **Chatbot Integration**: Guides users and provides relevant assistance using a trained NLP model.

## Setup
1. **Build and start services**:
    ```bash
    docker-compose up --build
    ```
2. **Access the services**:
   - **Backend**: `http://localhost:8000`
   - **Chatbot**: `http://localhost:5005`
   - **Frontend**: `http://localhost:3000`

## Prerequisites
- Docker and Docker Compose installed on your machine.
- Basic knowledge of Python and web development.

## License
This project is licensed under the terms of the [MIT License](LICENSE).

