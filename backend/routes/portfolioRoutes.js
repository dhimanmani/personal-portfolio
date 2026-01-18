// ============================================
// Portfolio Routes - API Endpoints
// ============================================
// This file defines all the API routes (endpoints) for the portfolio backend
// Each route handles HTTP requests and returns JSON responses

// Import Express Router to create route handlers
const express = require('express');
const router = express.Router();

// Import the portfolio data from the data file
const {
    profileData,
    skillsData,
    projectsData,
    educationData,
    achievementsData
} = require('../data/portfolioData');

// ============================================
// GET Routes - Return Data
// ============================================

/**
 * GET /api/profile
 * Returns profile information (name, bio, photo)
 */
router.get('/profile', (req, res) => {
    // Send profile data as JSON response
    // Status 200 means "OK" - request was successful
    res.status(200).json({
        success: true,
        data: profileData
    });
});

/**
 * GET /api/skills
 * Returns array of all skills
 */
router.get('/skills', (req, res) => {
    // Send skills data as JSON response
    res.status(200).json({
        success: true,
        data: skillsData
    });
});

/**
 * GET /api/projects
 * Returns array of all projects
 */
router.get('/projects', (req, res) => {
    // Send projects data as JSON response
    res.status(200).json({
        success: true,
        data: projectsData
    });
});

/**
 * GET /api/education
 * Returns array of all education entries
 */
router.get('/education', (req, res) => {
    // Send education data as JSON response
    res.status(200).json({
        success: true,
        data: educationData
    });
});

/**
 * GET /api/achievements
 * Returns array of all achievements
 */
router.get('/achievements', (req, res) => {
    // Send achievements data as JSON response
    res.status(200).json({
        success: true,
        data: achievementsData
    });
});

// ============================================
// POST Routes - Accept Data
// ============================================

/**
 * POST /api/contact
 * Accepts contact form data (name, email, message)
 * Logs the data to console (no database yet)
 */
router.post('/contact', (req, res) => {
    // Extract data from request body
    // req.body contains the data sent from frontend
    const { name, email, message } = req.body;

    // Validate that required fields are present
    if (!name || !email || !message) {
        // Status 400 means "Bad Request" - client sent invalid data
        return res.status(400).json({
            success: false,
            message: 'Please provide name, email, and message'
        });
    }

    // Log the contact form submission to console
    console.log('='.repeat(50));
    console.log('New Contact Form Submission:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Timestamp:', new Date().toISOString());
    console.log('='.repeat(50));

    // Send success response back to frontend
    // Status 201 means "Created" - resource was successfully created
    res.status(201).json({
        success: true,
        message: 'Thank you for your message! I will get back to you soon.'
    });
});

// Export the router so it can be used in server.js
module.exports = router;
