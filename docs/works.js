// Project Data
const projects = [
    {
        title: "Portfolio Website",
        description: "A personal portfolio website designed to showcase your skills, projects, and achievements in an organized and visually appealing manner. Built using HTML, CSS, and JavaScript, it includes sections for an about page, a projects gallery, contact information with a functional form, and links to social media or GitHub profiles. The site features responsive design to ensure compatibility with different devices and incorporates smooth animations and interactive elements for an engaging user experience.",
    },
    {
        title: "E-commerce Site",
        description: "A simple e-commerce website with a catalog of products, a shopping cart, and a secure checkout system. The front end is built with React to deliver a dynamic and responsive user interface, while the back end uses Node.js to handle server-side logic, manage product data, and process user authentication. The website also includes search and filter functionality, user reviews, and payment gateway integration for a seamless shopping experience.",
    },
    {
        title: "Task Management Application",
        description: "A web app to manage personal tasks or projects efficiently, featuring notifications, reminders, and deadline tracking. Users can create, edit, delete, and organize tasks into categories or priority levels. Built using a modern JavaScript framework, it incorporates a clean user interface, drag-and-drop functionality for task organization, and integration with calendar services. Additional features include recurring task support, progress tracking, and optional email or push notifications for deadlines.",
    },
];

// DOM Elements
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("projectModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeModal = document.querySelector(".close");

// Event Listeners for Cards
projectCards.forEach((card) => {
    card.addEventListener("click", () => {
        const index = card.getAttribute("data-index");
        const project = projects[index];
        modalTitle.textContent = project.title;
        modalDescription.textContent = project.description;
        modal.style.display = "block";
    });
});

// Close Modal
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Close Modal on Outside Click
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
