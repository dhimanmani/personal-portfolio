// ============================================
// API Utility - Frontend API Communication
// ============================================
// This file handles all communication with the backend API
// It provides functions to fetch data from the backend

// Base URL for the API (change this if your backend runs on a different port)
const API_BASE_URL = 'http://localhost:3000/api';

// ============================================
// Helper Function - Fetch Data from API
// ============================================

/**
 * Generic function to fetch data from API endpoints
 * @param {string} endpoint - The API endpoint (e.g., '/profile', '/skills')
 * @returns {Promise} - Promise that resolves with the data
 */
async function fetchFromAPI(endpoint) {
    try {
        // Make HTTP GET request to the API endpoint
        const response = await fetch(`${API_BASE_URL}${endpoint}`);

        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const result = await response.json();

        // Return the data from the response
        return result.data;
    } catch (error) {
        // If API request fails, log error and return null
        console.error(`Error fetching ${endpoint}:`, error);
        console.log(`Note: Make sure the backend server is running on ${API_BASE_URL}`);
        return null;
    }
}

// ============================================
// API Functions - Specific Endpoints
// ============================================

/**
 * Fetch profile data from API
 * @returns {Promise<Object>} Profile data object
 */
async function fetchProfile() {
    return await fetchFromAPI('/profile');
}

/**
 * Fetch skills data from API
 * @returns {Promise<Array>} Array of skill objects
 */
async function fetchSkills() {
    return await fetchFromAPI('/skills');
}

/**
 * Fetch projects data from API
 * @returns {Promise<Array>} Array of project objects
 */
async function fetchProjects() {
    return await fetchFromAPI('/projects');
}

/**
 * Fetch education data from API
 * @returns {Promise<Array>} Array of education objects
 */
async function fetchEducation() {
    return await fetchFromAPI('/education');
}

/**
 * Fetch achievements data from API
 * @returns {Promise<Array>} Array of achievement objects
 */
async function fetchAchievements() {
    return await fetchFromAPI('/achievements');
}

// ============================================
// POST Function - Send Data to API
// ============================================

/**
 * Send contact form data to API
 * @param {Object} formData - Object with name, email, message
 * @returns {Promise<Object>} Response from server
 */
async function sendContactMessage(formData) {
    try {
        // Make HTTP POST request to the API endpoint
        const response = await fetch(`${API_BASE_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Tell server we're sending JSON
            },
            body: JSON.stringify(formData) // Convert object to JSON string
        });

        // Check if response is OK
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse JSON response
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error sending contact message:', error);
        throw error; // Re-throw so caller can handle it
    }
}

// Export functions so they can be used in main.js
// In a browser environment, we'll attach them to window object
if (typeof window !== 'undefined') {
    window.API = {
        fetchProfile,
        fetchSkills,
        fetchProjects,
        fetchEducation,
        fetchAchievements,
        sendContactMessage
    };
}
