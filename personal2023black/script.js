// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdo-QDuONXq4zml-IvgjbUSacoI5DKrr4",
  authDomain: "filipsw-de3ab.firebaseapp.com",
  projectId: "filipsw-de3ab",
  storageBucket: "filipsw-de3ab.appspot.com",
  messagingSenderId: "737502907002",
  appId: "1:737502907002:web:005556f4f3d497a0bbc9c3",
  measurementId: "G-QTNE25RWNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

$('.link').click(function(e){
    e.preventDefault();
  
    if($(this).hasClass('home_link')){
        $('.home_link').addClass('active');
        $('.projects_link').removeClass('active');
        $('.contact_link').removeClass('active');

        $('.home_container').addClass('visible').removeClass('hidden');
        $('.projects_container').addClass('hidden').removeClass('visible');
        $('.contact_container').addClass('hidden').removeClass('visible');


    } else if($(this).hasClass('projects_link')){
        $('.home_link').removeClass('active');
        $('.projects_link').addClass('active');
        $('.contact_link').removeClass('active');
        
        $('.home_container').removeClass('visible').addClass('hidden');
        $('.projects_container').addClass('visible').removeClass('hidden');
        $('.contact_container').addClass('hidden').removeClass('visible');
        
    } else if($(this).hasClass('contact_link')){
        $('.home_link').removeClass('active');
        $('.projects_link').removeClass('active');
        $('.contact_link').addClass('active');

        $('.contact_container').addClass('visible').removeClass('hidden');
        $('.home_container').addClass('hidden').removeClass('visible');
        $('.projects_container').addClass('hidden').removeClass('visible');

    }

    if($('.section_container').hasClass('hidden')){

    }
})


