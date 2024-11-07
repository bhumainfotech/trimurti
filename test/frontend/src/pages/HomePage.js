// HomePage.js
// Main home page component

import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Welcome to Trimurti 2.0 - Cybercrime Management Portal</h1>
            <p>Manage and report cybercrimes efficiently with our platform.</p>
            <nav>
                <Link to="/submit-complaint">Submit a Complaint</Link> | 
                <Link to="/track-complaint">Track a Complaint</Link> | 
                <Link to="/upload-evidence">Upload Evidence</Link>
            </nav>
        </div>
    );
};

export default HomePage;

