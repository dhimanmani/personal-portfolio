// ============================================
// Portfolio Website - Main JavaScript File
// ============================================

// Wait for the DOM to be fully loaded before running scripts
document.addEventListener('DOMContentLoaded', async function () {
    // Initialize UI functionality
    initMobileMenu();
    initSmoothScrolling();

    // Load data from API (with fallback to local data)
    await loadDataFromAPI();

    // Initialize contact form
    initContactForm();
});

// ============================================
// Mobile Menu Toggle
// ============================================

/**
 * Initialize mobile menu toggle functionality
 * Toggles the navigation menu on mobile devices
 */
function initMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu when button is clicked
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when a link is clicked (mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// Smooth Scrolling
// ============================================

/**
 * Initialize smooth scrolling for navigation links
 * Adds smooth scroll behavior to all anchor links
 */
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Only prevent default if it's a valid section link
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();

                const targetSection = document.querySelector(href);
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// Data Loading from API
// ============================================

/**
 * Fallback data - used if API is not available
 * This ensures the website still works even if backend is down
 */
const fallbackSkillsData = [
    { name: 'C++', icon: '🌐' },
    { name: 'Python', icon: '🎨' },
    { name: 'HTML/CSS/JS', icon: '⚡' },
    { name: 'Data Structures and Algorithms', icon: '📦' },
    { name: 'Project Management', icon: '📱' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'DBMS', icon: '📊' },
    { name: 'JAVA', icon: '🔍' }
];

const fallbackProjectsData = [
    {
        title: 'Music Recommendation System',
        description: 'A simple Music Recommendation System using C++ and DSA',
        technologies: ['HTML', 'CSS', 'JAVA', 'DSA'],
        link: 'https://github.com/dhimanmani/Graph-based-music-recommendation-system'
    },
    {
        title: 'Parking Management System',
        description: 'Created a voice query generator project to ease the struggle to find a parking spot in a busy place',
        technologies: ['DBMS', 'CSS', 'HTML', 'PYTHON'],
        link: 'https://github.com/dhimanmani/AI-powered-parking-management-system'
    },
    {
        title: 'Code Review System',
        description: 'Created a code review system using AI to help developers review their code faster and more efficiently',
        technologies: ['PYTHON', 'CSS', 'JavaScript', 'API'],
        link: 'https://github.com/dhimanmani/ai-code-review-system'
    },
    {
        title: 'Privacy Preserving Mechanism',
        description: 'To protect driver information while also considering and facilitating effective vehicle-to-vehicle communication.',
        technologies: ['VANET', 'PYTHON', 'JUPYTER NOTEBOOK'],
        link: 'https://github.com/dhimanmani/Privacy-Preserving-Mechanism-'
    }
];

const fallbackEducationData = [
    {
        degree: 'Bachelor of Technology in Computer Science and Engineering',
        school: 'Graphic Era Deemed to be University',
        year: '2023 - 2027',
        marks: {
            type: 'GPA',
            value: 9.30,
            scale: 10
        }
    },
    {
        degree: '12th CBSE',
        school: 'Kendriya Vidyalaya ONGC',
        year: '2023',
        marks: {
            type: 'Percentage',
            value: 88
        }
    },
    {
        degree: '10th CBSE',
        school: 'Kendriya Vidyalaya ONGC',
        year: '2021',
        marks: {
            type: 'Percentage',
            value: 97
        }
    }
];

const fallbackAchievementsData = [
    {
        title: 'Academic Excellence',
        description: 'Maintained a CGPA of 9.30/10 in B.Tech Computer Science.',
        icon: '🎓'
    },
    {
        title: 'HackerRank',
        description: 'Earned a Four-Star rating in C++ and C and Three-Star rating in Python on HackerRank.',
        icon: '🏆'
    },
    {
        title: 'LeetCode',
        description: 'Solved 300+ problems on Leetcode to improve my problem solving skills and gain knowledge in DSA',
        icon: '🌟'
    },
    {
        title: 'Project Development',
        description: 'Built multiple academic and personal projects in AI/ML, DSA, DBMS, and backend systems.',
        icon: '💻'
    },
    {
        title: 'GitHub Contributions',
        description: 'Uploaded and maintained multiple projects on GitHub with proper documentation.',
        icon: '📂'
    }
];

/**
 * Load all data from API, fallback to local data if API fails
 * This demonstrates how frontend communicates with backend
 */
async function loadDataFromAPI() {
    console.log('Loading data from API...');

    // Try to fetch data from API, use fallback if it fails
    const skillsData = await window.API?.fetchSkills() || fallbackSkillsData;
    const projectsData = await window.API?.fetchProjects() || fallbackProjectsData;
    const educationData = await window.API?.fetchEducation() || fallbackEducationData;
    const achievementsData = await window.API?.fetchAchievements() || fallbackAchievementsData;

    // Render all sections with the fetched/fallback data
    renderSkills(skillsData);
    renderProjects(projectsData);
    renderEducation(educationData);
    renderAchievements(achievementsData);

    console.log('Data loaded successfully!');
}

// ============================================
// Skills Rendering
// ============================================

/**
 * Render skills dynamically to the page
 * @param {Array} skillsData - Array of skill objects to render
 */
function renderSkills(skillsData) {
    const skillsContainer = document.getElementById('skills-container');

    if (!skillsContainer) return;

    // Clear any existing content
    skillsContainer.innerHTML = '';

    // Create a card for each skill
    skillsData.forEach(skill => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';

        skillCard.innerHTML = `
            <div class="skill-icon">${skill.icon}</div>
            <div class="skill-name">${skill.name}</div>
        `;

        skillsContainer.appendChild(skillCard);
    });
}

// ============================================
// Projects Rendering
// ============================================

/**
 * Render projects dynamically to the page
 * @param {Array} projectsData - Array of project objects to render
 */
function renderProjects(projectsData) {
    const projectsContainer = document.getElementById('projects-container');

    if (!projectsContainer) return;

    // Clear any existing content
    projectsContainer.innerHTML = '';

    // Create a card for each project
    projectsData.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';

        // Create technologies HTML
        const techTags = project.technologies
            .map(tech => `<span class="tech-tag">${tech}</span>`)
            .join('');

        projectCard.innerHTML = `
            <div class="project-image">${project.title}</div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">${techTags}</div>
                <a href="${project.link}" class="project-link">View Project →</a>
            </div>
        `;

        projectsContainer.appendChild(projectCard);
    });
}

// ============================================
// Education Rendering
// ============================================

/**
 * Render education entries dynamically to the page
 * @param {Array} educationData - Array of education objects to render
 */
function renderEducation(educationData) {
    const educationContainer = document.getElementById('education-container');

    if (!educationContainer) return;

    // Clear any existing content
    educationContainer.innerHTML = '';

    // Create an item for each education entry
    educationData.forEach(education => {
        const educationItem = document.createElement('div');
        educationItem.className = 'education-item';

        // Format marks display
        let marksDisplay = '';
        if (education.marks) {
            if (education.marks.scale) {
                marksDisplay = `${education.marks.type}: ${education.marks.value}/${education.marks.scale}`;
            } else {
                marksDisplay = `${education.marks.type}: ${education.marks.value}%`;
            }
        }

        educationItem.innerHTML = `
            <div class="education-degree">${education.degree}</div>
            <div class="education-school">${education.school}</div>
            <div class="education-year">${education.year}</div>
            ${marksDisplay ? `<div class="education-marks">${marksDisplay}</div>` : ''}
        `;

        educationContainer.appendChild(educationItem);
    });
}

// ============================================
// Achievements Rendering
// ============================================

/**
 * Render achievements dynamically to the page
 * @param {Array} achievementsData - Array of achievement objects to render
 */
function renderAchievements(achievementsData) {
    const achievementsContainer = document.getElementById('achievements-container');

    if (!achievementsContainer) return;

    // Clear any existing content
    achievementsContainer.innerHTML = '';

    // Create a card for each achievement
    achievementsData.forEach(achievement => {
        const achievementCard = document.createElement('div');
        achievementCard.className = 'achievement-card';

        achievementCard.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <h3 class="achievement-title">${achievement.title}</h3>
            <p class="achievement-description">${achievement.description}</p>
        `;

        achievementsContainer.appendChild(achievementCard);
    });
}

// ============================================
// Contact Form Handling
// ============================================

/**
 * Initialize contact form submission handler
 * Sends form data to backend API via POST request
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async function (e) {
        // Prevent default form submission
        e.preventDefault();

        // Get form input values
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Disable submit button to prevent multiple submissions
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';

        try {
            // Send data to backend API
            if (window.API && window.API.sendContactMessage) {
                const response = await window.API.sendContactMessage(formData);

                // Show success message
                alert(response.message || 'Appreciate you reaching out! I will get back to you soon.');
            } else {
                // Fallback if API is not available
                console.log('Form submitted!');
                console.log('Form Data:', formData);
                alert('Appreciate you reaching out! I will get back to you soon.');
            }

            // Reset the form
            contactForm.reset();
        } catch (error) {
            // Handle errors
            console.error('Error sending message:', error);
            alert('Sorry, there was an error sending your message. Please try again later.');
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
        }
    });
}

// ============================================
// Optional: Navbar Background on Scroll
// ============================================

/**
 * Change navbar background on scroll
 * Adds a subtle shadow when user scrolls down
 */
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 15px rgba(139, 92, 246, 0.3)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(139, 92, 246, 0.2)';
    }
});
