// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
// import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js';

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Navigation toggling
const sections = {
  home_link: 'home_container',
  projects_link: 'projects_container',
  contact_link: 'contact_container'
};

// $('.link').on('click', function(e) {
//   e.preventDefault();

//   $('.link').removeClass('active');
//   $(this).addClass('active');

//   $('.section_container').removeClass('visible').addClass('hidden');

//   const targetClass = Object.keys(sections).find(key => $(this).hasClass(key));
//   if (targetClass) {
//     $('.' + sections[targetClass]).removeClass('hidden').addClass('visible');
//   }
// });

// Smooth scrolling only for Projects section on desktop
let targetScroll = 0;    // Desired scroll position (in pixels)
let currentScroll = 0;   // Current rendered scroll position
const easeFactor = 0.1;  // Smoothing factor for easing

// Get the scroll container within the Projects section.
// The HTML must include an element with class 'projects-inner' inside the #projects container.
const projectsSection = document.getElementById('projects');
const contentContainer = projectsSection.querySelector('.projects-inner');

// Only attach custom scroll on desktop and when Projects section is visible.
// if (window.innerWidth >= 1024) {
//   projectsSection.addEventListener('wheel', (e) => {
//         console.log('scrolled')
//     // Only update scroll if Projects section is visible
//     if (!projectsSection.classList.contains('visible')) return;
//     e.preventDefault(); // prevent native scrolling

//     targetScroll += e.deltaY; // accumulate scroll delta

//     // Clamp targetScroll between 0 and maximum scrollable distance
//     const maxScroll = contentContainer.scrollHeight - projectsSection.clientHeight;
//     if (targetScroll < 0) targetScroll = 0;
//     if (targetScroll > maxScroll) targetScroll = maxScroll;
//   }, { passive: false });

//   // Optionally, add touch event handling for mobile devices if desired
//   let touchStartY = 0;
//   projectsSection.addEventListener('touchstart', (e) => {
//     if (!projectsSection.classList.contains('visible')) return;
//     touchStartY = e.touches[0].clientY;
//   });
//   projectsSection.addEventListener('touchmove', (e) => {
//     if (!projectsSection.classList.contains('visible')) return;
//     e.preventDefault();
//     const touchY = e.touches[0].clientY;
//     targetScroll += (touchStartY - touchY);
//     touchStartY = touchY;
//     const maxScroll = contentContainer.scrollHeight - projectsSection.clientHeight;
//     if (targetScroll < 0) targetScroll = 0;
//     if (targetScroll > maxScroll) targetScroll = maxScroll;
//   }, { passive: false });
// }

// // Animation loop to smoothly update the scroll position
// function smoothScrollLoop() {
//     console.log('scrolled')
//   currentScroll += (targetScroll - currentScroll) * easeFactor;
//   contentContainer.style.transform = `translateY(-${currentScroll}px)`;
//   requestAnimationFrame(smoothScrollLoop);
// }
// requestAnimationFrame(smoothScrollLoop);


document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      // Update active class on navigation
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      this.classList.add('active');
      
      // Toggle sections without reloading
      document.querySelectorAll('.section_container').forEach(section => {
        section.classList.add('hidden');
        section.classList.remove('visible');
      });
      const targetSection = document.querySelector(this.getAttribute('href'));
      if (targetSection) {
        targetSection.classList.remove('hidden');
        targetSection.classList.add('visible');
      }
    });
  });