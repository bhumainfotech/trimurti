// ComplaintForm.js
// Component to handle the submission of complaints

import React, { useState } from 'react';
import axios from 'axios';

const ComplaintForm = () => {
    const [formData, setFormData] = useState({
        acknowledgementNumber: '',
        categoryOfComplaint: '',
        moneyLost: false,
        date: '',
        description: '',
        complainantName: '',
        mobileNumber: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/complaints', formData);
            alert('Complaint submitted successfully!');
        } catch (error) {
            alert('Error submitting the complaint.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Acknowledgement Number:
                <input type="text" name="acknowledgementNumber" value={formData.acknowledgementNumber} onChange={handleChange} required />
            </label>
            <label>
                Category of Complaint:
                <input type="text" name="categoryOfComplaint" value={formData.categoryOfComplaint} onChange={handleChange} required />
            </label>
            <label>
                Money Lost:
                <input type="checkbox" name="moneyLost" checked={formData.moneyLost} onChange={handleChange} />
            </label>
            <label>
                Date:
                <input type="datetime-local" name="date" value={formData.date} onChange={handleChange} required />
            </label>
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange} required></textarea>
            </label>
            <label>
                Complainant Name:
                <input type="text" name="complainantName" value={formData.complainantName} onChange={handleChange} required />
            </label>
            <label>
                Mobile Number:
                <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required />
            </label>
            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>
            <button type="submit">Submit Complaint</button>
        </form>
    );
};

export default ComplaintForm;

