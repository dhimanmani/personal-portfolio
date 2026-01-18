// ============================================
// Portfolio Backend Server
// ============================================
// This is the main server file that starts the Express server
// It sets up middleware, routes, and listens for incoming requests

// Import Express framework
const express = require('express');

// Import CORS middleware (allows frontend to make requests from different origin)
const cors = require('cors');

// Import the portfolio routes
const portfolioRoutes = require('./routes/portfolioRoutes');

// Create an Express application
const app = express();

// Define the port number (use environment variable or default to 3000)
const PORT = process.env.PORT || 3000;

// ============================================
// Middleware Setup
// ============================================

// CORS middleware - allows frontend (running on different port) to access this API
// Without this, browsers block requests from different origins (security feature)
app.use(cors());

// Express.json() middleware - parses incoming JSON data from request body
// This allows us to read JSON data sent from frontend (like in POST requests)
app.use(express.json());

// Express.urlencoded() middleware - parses URL-encoded data
// This handles form data sent from HTML forms
app.use(express.urlencoded({ extended: true }));

// ============================================
// Routes Setup
// ============================================

// Mount the portfolio routes at /api
// This means all routes in portfolioRoutes.js will be prefixed with /api
// Example: /api/profile, /api/skills, etc.
app.use('/api', portfolioRoutes);

// ============================================
// Root Route (Optional - for testing)
// ============================================

// Simple route to test if server is running
app.get('/', (req, res) => {
    res.json({
        message: 'Portfolio API Server is running!',
        endpoints: {
            profile: '/api/profile',
            skills: '/api/skills',
            projects: '/api/projects',
            education: '/api/education',
            achievements: '/api/achievements',
            contact: 'POST /api/contact'
        }
    });
});

// ============================================
// Error Handling Middleware
// ============================================

// This catches any errors that occur in routes
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// ============================================
// Start Server
// ============================================

// Start listening for incoming requests on the specified port
app.listen(PORT, () => {
    console.log('='.repeat(50));
    console.log(`🚀 Portfolio Backend Server is running!`);
    console.log(`📍 Server URL: http://localhost:${PORT}`);
    console.log(`📡 API Base URL: http://localhost:${PORT}/api`);
    console.log('='.repeat(50));
    console.log('\nAvailable Endpoints:');
    console.log('  GET  /api/profile');
    console.log('  GET  /api/skills');
    console.log('  GET  /api/projects');
    console.log('  GET  /api/education');
    console.log('  GET  /api/achievements');
    console.log('  POST /api/contact');
    console.log('='.repeat(50));
});
