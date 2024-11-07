// LanguageSwitcher.js
// Component to switch between multiple languages

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <div className="language-switcher">
            <button onClick={() => changeLanguage('en')}>English</button>
            <button onClick={() => changeLanguage('hi')}>Hindi</button>
            <button onClick={() => changeLanguage('bn')}>Bengali</button>
            <button onClick={() => changeLanguage('ta')}>Tamil</button>
            {/* Add more language buttons as needed */}
        </div>
    );
};

export default LanguageSwitcher;

