/*
Author: Tolihat Gbadebo
Course Code: INFT2202
Filename: main.js
Date: January 18th, 2024
Description: This is the javascript code for the website
*/

"use strict";

// JavaScript for the slideshow
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initial setup
showSlide(currentIndex);

// Automatic slideshow every 5 seconds (adjust as needed)
setInterval(nextSlide, 5000);




// Sample data for hypothetical projects
const projectsData = [
    {
        description: 'A description of Project 1.',
        image: 'images/slide1.jpg',
    },
    {
        description: 'A description of Project 2.',
        image: 'images/slide2.jpg',
    },

];

// Function to create a project card
function createProjectCard(project) {
    const card = document.createElement('div');
    card.classList.add('project-card');

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.title;

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(image);

    return card;
}

// Function to load projects onto the page
function loadProjects(startIndex, count) {
    const projectContainer = document.getElementById('project-container');

    for (let i = startIndex; i < startIndex + count && i < projectsData.length; i++) {
        const projectCard = createProjectCard(projectsData[i]);
        projectContainer.appendChild(projectCard);
    }
}

// Initial load of projects
const projectsPerPage = 3;
let currentLevel = 0;
loadProjects(currentLevel, projectsPerPage);

// Event listener for 'Load More' button
const loadMoreBtn = document.getElementById('load-more-btn');
loadMoreBtn.addEventListener('click', function () {
    currentLevel += projectsPerPage;
    loadProjects(currentIndex, projectsPerPage);
});

$(document).ready(function() {
    // Dynamically add 'Careers' link
    let careersLink = '<li class="nav-item"><a class="nav-link" href="careers.html">Careers</a></li>';
    $('.navbar-nav').append(careersLink);

    // Programmatically change 'Blog' to 'News'
    $('#blogLink').text('News');
});




