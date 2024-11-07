// EvidenceUploader.js
// Component for uploading evidence files

import React, { useState } from 'react';
import axios from 'axios';

const EvidenceUploader = () => {
    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleUpload = async () => {
        const formData = new FormData();
        Array.from(files).forEach((file) => {
            formData.append('files', file);
        });

        try {
            const response = await axios.post('/api/evidence/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Files uploaded successfully!');
        } catch (error) {
            alert('Error uploading files.');
        }
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload Evidence</button>
        </div>
    );
};

export default EvidenceUploader;

