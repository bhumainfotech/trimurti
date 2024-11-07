// App.js
// Main application component for routing and setup

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SubmitComplaintPage from './pages/SubmitComplaintPage';
import TrackComplaintPage from './pages/TrackComplaintPage';
import UploadEvidencePage from './pages/UploadEvidencePage';
import { useTranslation } from 'react-i18next';

const App = () => {
    const { t } = useTranslation();

    return (
        <Router>
            <div className="app">
                <header>
                    <h1>{t('welcome_message')}</h1>
                </header>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/submit-complaint" component={SubmitComplaintPage} />
                    <Route path="/track-complaint" component={TrackComplaintPage} />
                    <Route path="/upload-evidence" component={UploadEvidencePage} />
                </Switch>
            </div>
        </Router>
    );
};

export default App;

