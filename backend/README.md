# Portfolio Backend API

A simple Node.js and Express.js backend for the portfolio website. This backend demonstrates REST API concepts for learning full-stack development.

## 📁 Project Structure

```
backend/
├── server.js              # Main server file - starts Express server
├── routes/
│   └── portfolioRoutes.js # API route definitions
├── data/
│   └── portfolioData.js   # Data storage (in-memory, no database)
└── package.json           # Node.js dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js installed on your computer (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will install Express.js and CORS packages.

3. **Start the server:**
   ```bash
   npm start
   ```
   Or:
   ```bash
   node server.js
   ```

4. **Server will start on:** `http://localhost:3000`

## 📡 API Endpoints

### GET Endpoints (Return Data)

- **GET /api/profile**
  - Returns profile information (name, bio, photo)
  - Response: `{ success: true, data: {...} }`

- **GET /api/skills**
  - Returns array of all skills
  - Response: `{ success: true, data: [...] }`

- **GET /api/projects**
  - Returns array of all projects
  - Response: `{ success: true, data: [...] }`

- **GET /api/education**
  - Returns array of all education entries
  - Response: `{ success: true, data: [...] }`

- **GET /api/achievements**
  - Returns array of all achievements
  - Response: `{ success: true, data: [...] }`

### POST Endpoints (Accept Data)

- **POST /api/contact**
  - Accepts contact form data
  - Request Body: `{ name: string, email: string, message: string }`
  - Response: `{ success: true, message: "..." }`
  - Logs data to console (no database yet)

## 🧪 Testing the API

### Using Browser

1. Start the server: `npm start`
2. Open browser and visit:
   - `http://localhost:3000` - See API info
   - `http://localhost:3000/api/skills` - See skills data
   - `http://localhost:3000/api/projects` - See projects data

### Using curl (Terminal)

```bash
# Get skills
curl http://localhost:3000/api/skills

# Get projects
curl http://localhost:3000/api/projects

# Send contact message
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","message":"Hello!"}'
```

### Using Postman

1. Import the API endpoints
2. Set method (GET/POST)
3. Set URL (e.g., `http://localhost:3000/api/skills`)
4. For POST requests, add JSON body in Body tab

## 🔧 How It Works

### 1. **server.js**
- Creates Express application
- Sets up middleware (CORS, JSON parser)
- Mounts routes at `/api`
- Starts listening on port 3000

### 2. **portfolioRoutes.js**
- Defines all API endpoints
- Handles GET requests (return data)
- Handles POST requests (accept data)
- Returns JSON responses

### 3. **portfolioData.js**
- Stores all portfolio data
- Exports data for use in routes
- No database - just JavaScript objects/arrays

### 4. **Frontend Communication**
- Frontend makes HTTP requests to API endpoints
- Uses `fetch()` API to get/send data
- Handles responses and renders data

## 📚 Learning Concepts

This backend demonstrates:

1. **REST API** - Representational State Transfer
   - GET for retrieving data
   - POST for sending data

2. **HTTP Methods**
   - GET: Read data
   - POST: Create/send data

3. **JSON** - JavaScript Object Notation
   - Data format for API communication

4. **CORS** - Cross-Origin Resource Sharing
   - Allows frontend (different port) to access API

5. **Middleware** - Functions that run between request and response
   - CORS middleware
   - JSON parser middleware

6. **Routes** - URL paths that handle specific requests
   - `/api/skills` handles skills requests
   - `/api/contact` handles contact form submissions

## 🎯 Next Steps (For Learning)

1. **Add More Endpoints**
   - PUT endpoint to update data
   - DELETE endpoint to remove data

2. **Add Validation**
   - Validate email format
   - Check required fields

3. **Add Database**
   - Use MongoDB or PostgreSQL
   - Store data persistently

4. **Add Authentication**
   - Protect certain endpoints
   - User login/logout

5. **Add Error Handling**
   - Better error messages
   - Error logging

## ⚠️ Important Notes

- This is a **learning project**, not production-ready
- Data is stored in memory (lost when server restarts)
- No authentication or security measures
- CORS allows all origins (not secure for production)

## 🐛 Troubleshooting

**Port already in use:**
- Change PORT in server.js or use: `PORT=3001 node server.js`

**CORS errors:**
- Make sure CORS middleware is installed and configured

**Data not loading:**
- Check if server is running
- Check browser console for errors
- Verify API URL in frontend code

## 📖 Resources

- [Express.js Documentation](https://expressjs.com/)
- [REST API Tutorial](https://restfulapi.net/)
- [Node.js Documentation](https://nodejs.org/)
