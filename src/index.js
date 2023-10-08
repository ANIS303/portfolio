import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import $ from "jquery";
const root = ReactDOM.createRoot(document.getElementById('root'));
$(document).ready(function(){

  // Add smooth scroll to nav links
  $('.nav-link').click(function(e){
    e.preventDefault();

    var target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
  });

  // Add active class on scroll  
  $(window).scroll(function() {
    $('.nav-link').each(function(){
      var section = $(this).attr('href');

      if ($(window).scrollTop() >= $(section).offset().top - 500) {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
      }
    });
  });

});

   
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
