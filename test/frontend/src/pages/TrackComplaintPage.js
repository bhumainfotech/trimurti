// TrackComplaintPage.js
// Page for tracking complaints

import React, { useState } from 'react';
import axios from 'axios';

const TrackComplaintPage = () => {
    const [acknowledgementNumber, setAcknowledgementNumber] = useState('');
    const [complaintStatus, setComplaintStatus] = useState(null);

    const handleInputChange = (e) => {
        setAcknowledgementNumber(e.target.value);
    };

    const handleTrackComplaint = async () => {
        try {
            const response = await axios.get(`/api/complaints/track/${acknowledgementNumber}`);
            setComplaintStatus(response.data);
        } catch (error) {
            alert('Error retrieving complaint status.');
        }
    };

    return (
        <div className="track-complaint-page">
            <h2>Track Your Complaint</h2>
            <input
                type="text"
                placeholder="Enter Acknowledgement Number"
                value={acknowledgementNumber}
                onChange={handleInputChange}
            />
            <button onClick={handleTrackComplaint}>Track Complaint</button>
            {complaintStatus && (
                <div className="complaint-status">
                    <h3>Complaint Status</h3>
                    <pre>{JSON.stringify(complaintStatus, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default TrackComplaintPage;

