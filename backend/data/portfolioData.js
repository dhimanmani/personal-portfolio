// ============================================
// Portfolio Data - Backend Data Storage
// ============================================
// This file contains all the portfolio data that was previously in the frontend
// We've moved it here to separate data from presentation logic

// Profile information
const profileData = {
    name: "Mani Dhiman",
    bio: "A passionate Computer Science student learning and exploring the world of technology.",
    photo: "assets/images/Screenshot 2026-01-18 at 8.15.13 PM.png"
};

// Skills data - Array of skill objects
const skillsData = [
    { name: 'C++', icon: '🌐' },
    { name: 'Python', icon: '🎨' },
    { name: 'HTML/CSS/JS', icon: '⚡' },
    { name: 'Data Structures and Algorithms', icon: '📦' },
    { name: 'Project Management', icon: '📱' },
    { name: 'Problem Solving', icon: '🧩' },
    { name: 'DBMS', icon: '📊' },
    { name: 'JAVA', icon: '🔍' }
];

// Projects data - Array of project objects
const projectsData = [
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

// Education data - Array of education objects
const educationData = [
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

// Achievements data - Array of achievement objects
const achievementsData = [
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

// Export all data so it can be used in routes
module.exports = {
    profileData,
    skillsData,
    projectsData,
    educationData,
    achievementsData
};
