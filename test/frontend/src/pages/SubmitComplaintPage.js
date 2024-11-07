// SubmitComplaintPage.js
// Page for submitting complaints

import React from 'react';
import ComplaintForm from '../components/ComplaintForm';

const SubmitComplaintPage = () => {
    return (
        <div className="submit-complaint-page">
            <h2>Submit a Complaint</h2>
            <ComplaintForm />
        </div>
    );
};

export default SubmitComplaintPage;

