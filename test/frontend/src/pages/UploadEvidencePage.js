// UploadEvidencePage.js
// Page for uploading evidence

import React from 'react';
import EvidenceUploader from '../components/EvidenceUploader';

const UploadEvidencePage = () => {
    return (
        <div className="upload-evidence-page">
            <h2>Upload Evidence</h2>
            <EvidenceUploader />
        </div>
    );
};

export default UploadEvidencePage;

