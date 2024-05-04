import axios from 'axios';

const API_BASE_URL = 'https://exampleapi.com';

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/register`, userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        return null;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        return null;
    }
};