// chatbot.js
// Service for integrating with the Rasa chatbot

import axios from 'axios';

const CHATBOT_BASE_URL = 'http://bhucloud.com/chatbot/webhooks/rest/webhook'; // Replace with your production base URL if needed

// Function to send a message to the chatbot
export const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios.post(CHATBOT_BASE_URL, {
            sender: 'user',
            message: message,
        });
        return response.data;
    } catch (error) {
        console.error('Error communicating with chatbot:', error);
        throw error;
    }
};

