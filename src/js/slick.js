import $ from 'jquery';


$(document).ready(function() {
    $('.slider').slick({
        slidesToShow: 4,
        prevArrow: '.switch__prev',
        nextArrow: '.switch__next'
    });
});

// function init() {
//     $('.slider').slick({
//         slidesToShow: 4,
//         prevArrow: '.switch__prev',
//         nextArrow: '.switch__next'
//     });
//   }
  
// $(document).ready(init);