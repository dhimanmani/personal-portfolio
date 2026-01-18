<<<<<<< HEAD
# Personal Portfolio Website

A beginner-friendly personal portfolio website built with HTML, CSS, and vanilla JavaScript.

## Project Structure

```
portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # JavaScript functionality
├── assets/
│   ├── images/        # Place your images here
│   └── resume.pdf     # Place your resume PDF here
└── README.md          # This file
```

## Features

- ✅ Responsive design (mobile-first approach)
- ✅ Smooth scrolling navigation
- ✅ Dynamic content rendering (skills, projects, education, achievements)
- ✅ Contact form (logs to console)
- ✅ Mobile-friendly hamburger menu
- ✅ Clean and minimal design

## Getting Started

1. **Add Your Content**
   - Edit `js/main.js` to update:
     - Skills data (`skillsData` array)
     - Projects data (`projectsData` array)
     - Education data (`educationData` array)
     - Achievements data (`achievementsData` array)
   
2. **Add Your Profile Photo**
   - Place your profile photo in `assets/images/` folder
   - Name it `profile.jpg` (or update the path in `index.html`)

3. **Add Your Resume**
   - Place your resume PDF in `assets/` folder
   - Name it `resume.pdf`

4. **Customize Your Information**
   - Update your name, bio, and other personal info in `index.html`
   - Update social media links in the footer section

5. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     ```
   - Then visit `http://localhost:8000` in your browser

## Customization Guide

### Changing Colors
Edit the color values in `css/style.css`:
- Primary color: `#3498db` (blue)
- Gradient colors: `#667eea` and `#764ba2` (purple gradient)
- Text color: `#333` (dark gray)
- Background: `#f8f9fa` (light gray)

### Adding More Sections
1. Add the HTML structure in `index.html`
2. Add corresponding styles in `css/style.css`
3. Add any dynamic rendering logic in `js/main.js`

### Modifying Data
All dynamic content is stored in arrays/objects in `js/main.js`:
- `skillsData` - Your skills
- `projectsData` - Your projects
- `educationData` - Your education
- `achievementsData` - Your achievements

Simply edit these arrays to update the content!

## Browser Support

This website works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Learning Resources
This project demonstrates:
- Semantic HTML5
- CSS Flexbox and Grid
- Vanilla JavaScript DOM manipulation
- Responsive web design
- Mobile-first approach
- Form handling
# personal-portfolio
>>>>>>>
