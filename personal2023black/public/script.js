import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const sections = {
  home_link: 'home_container',
  projects_link: 'projects_container',
  contact_link: 'contact_container'
};

$('.link').on('click', function(e) {
  e.preventDefault();

  $('.link').removeClass('active');
  $(this).addClass('active');

  $('.section_container').removeClass('visible').addClass('hidden');

  const targetClass = Object.keys(sections).find(key => $(this).hasClass(key));
  if (targetClass) {
    $('.' + sections[targetClass]).removeClass('hidden').addClass('visible');
  }
});