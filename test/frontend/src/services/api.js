// api.js
// Service for making API requests to the backend

import axios from 'axios';

const API_BASE_URL = 'http://bhucloud.com/api'; // Replace with your production base URL if needed

// Function to submit a complaint
export const submitComplaint = async (complaintData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/complaints`, complaintData);
        return response.data;
    } catch (error) {
        console.error('Error submitting complaint:', error);
        throw error;
    }
};

// Function to track a complaint status
export const trackComplaint = async (acknowledgementNumber) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/complaints/track/${acknowledgementNumber}`);
        return response.data;
    } catch (error) {
        console.error('Error tracking complaint:', error);
        throw error;
    }
};

// Function to upload evidence
export const uploadEvidence = async (formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/evidence/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error uploading evidence:', error);
        throw error;
    }
};

