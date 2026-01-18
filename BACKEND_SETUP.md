# Backend Setup Guide

## 🎯 Quick Start

### Step 1: Install Backend Dependencies

Open terminal in the `backend` folder and run:

```bash
cd backend
npm install
```

This installs:
- `express` - Web framework for Node.js
- `cors` - Allows frontend to communicate with backend

### Step 2: Start the Backend Server

```bash
npm start
```

You should see:
```
🚀 Portfolio Backend Server is running!
📍 Server URL: http://localhost:3000
📡 API Base URL: http://localhost:3000/api
```

### Step 3: Test the API

Open your browser and visit:
- `http://localhost:3000` - See API information
- `http://localhost:3000/api/skills` - See skills JSON data
- `http://localhost:3000/api/projects` - See projects JSON data

### Step 4: Open Frontend

1. Keep the backend server running (don't close the terminal)
2. Open `index.html` in your browser
3. The frontend will automatically fetch data from the API!

## 📁 File Structure Explained

```
backend/
├── server.js              # Main entry point - starts the server
├── routes/
│   └── portfolioRoutes.js # All API endpoints defined here
├── data/
│   └── portfolioData.js   # All your portfolio data stored here
└── package.json           # Lists dependencies (express, cors)
```

## 🔄 How Frontend and Backend Communicate

### Example: Fetching Skills

**Frontend (js/api.js):**
```javascript
// Makes HTTP GET request to backend
const skills = await fetch('http://localhost:3000/api/skills');
const data = await skills.json();
```

**Backend (routes/portfolioRoutes.js):**
```javascript
// Receives GET request and returns JSON data
router.get('/skills', (req, res) => {
    res.json({ success: true, data: skillsData });
});
```

### Example: Sending Contact Form

**Frontend (js/main.js):**
```javascript
// Makes HTTP POST request with form data
await fetch('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message })
});
```

**Backend (routes/portfolioRoutes.js):**
```javascript
// Receives POST request, logs data, sends response
router.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    console.log('New message:', name, email, message);
    res.json({ success: true, message: 'Thank you!' });
});
```

## 🧪 Testing API Endpoints

### Using Browser (GET requests only)

Just visit the URL:
- `http://localhost:3000/api/skills`
- `http://localhost:3000/api/projects`
- `http://localhost:3000/api/education`
- `http://localhost:3000/api/achievements`

### Using curl (Terminal)

```bash
# GET request
curl http://localhost:3000/api/skills

# POST request
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"Hello!"}'
```

### Using Browser Console

Open browser console (F12) and run:

```javascript
// Fetch skills
fetch('http://localhost:3000/api/skills')
  .then(res => res.json())
  .then(data => console.log(data));

// Send contact message
fetch('http://localhost:3000/api/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com',
    message: 'Hello!'
  })
})
  .then(res => res.json())
  .then(data => console.log(data));
```

## 🐛 Common Issues

### Port Already in Use

**Error:** `Port 3000 is already in use`

**Solution:** Change the port in `backend/server.js`:
```javascript
const PORT = process.env.PORT || 3001; // Change 3000 to 3001
```
Then update `js/api.js`:
```javascript
const API_BASE_URL = 'http://localhost:3001/api'; // Match the port
```

### CORS Errors

**Error:** `Access to fetch blocked by CORS policy`

**Solution:** Make sure CORS is installed and server is running. Check `backend/server.js` has:
```javascript
const cors = require('cors');
app.use(cors());
```

### Data Not Loading

**Check:**
1. Is backend server running? (Check terminal)
2. Is server URL correct in `js/api.js`?
3. Open browser console (F12) - any errors?
4. Try visiting API URL directly in browser

## 📚 Learning Path

1. **Understand the Flow:**
   - Frontend requests data → Backend responds with JSON
   - Frontend sends data → Backend receives and processes

2. **Explore the Code:**
   - Read `backend/server.js` - see how server starts
   - Read `backend/routes/portfolioRoutes.js` - see API endpoints
   - Read `js/api.js` - see how frontend calls API

3. **Try Modifying:**
   - Add a new skill in `backend/data/portfolioData.js`
   - Create a new endpoint in `backend/routes/portfolioRoutes.js`
   - Fetch new data in `js/api.js`

4. **Next Steps:**
   - Add a database (MongoDB, PostgreSQL)
   - Add authentication
   - Add validation
   - Deploy to cloud (Heroku, Vercel, etc.)

## 💡 Key Concepts

- **REST API:** Standard way to communicate between frontend and backend
- **GET:** Retrieve data (read)
- **POST:** Send data (create)
- **JSON:** Data format used for API communication
- **CORS:** Allows different origins (ports) to communicate
- **Middleware:** Functions that process requests before routes

## 🎓 What You've Learned

✅ How to create a Node.js/Express backend  
✅ How to define REST API endpoints  
✅ How frontend communicates with backend  
✅ How to handle GET and POST requests  
✅ How to structure a backend project  
✅ How to use JSON for data exchange  

Happy coding! 🚀
