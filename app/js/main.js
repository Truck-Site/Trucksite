$(function () {
  // Accordion arrows
  $('#accordion .collapse').on('show.bs.collapse', function () {
    $(this).siblings('.questions__header').addClass('active');
  });

  $('#accordion .collapse').on('hide.bs.collapse', function () {
    $(this).siblings('.questions__header').removeClass('active');
  });
});

// Slick sliders 

let pc__slider = $('.popular-categories__slider');

let pc__slider__settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]  
}

if(window.innerWidth > 768){
  pc__slider.slick(pc__slider__settings);
}

//Resize slider
$(window).resize(function (e) {
  if (window.innerWidth < 768) {
    if ($(pc__slider).hasClass('slick-initialized')) {
      $(pc__slider).slick('unslick');
    }
  }
  else {
      if(!$(pc__slider).hasClass('slick-initialized')){
        $(pc__slider).slick(pc__slider__settings);
    }    
  }
});

$('.trucks__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        dots:false,
        arrows:false,
        infinite: false
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.testimonials__slider').slick({
  arrows: false,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true
});

//Menu

let sideNav = document.getElementById("mySidenav");

$('.menu-btn').on('click', function (e) {
  e.preventDefault();
  sideNav.style.left = "0px";
  $('body').addClass('disable');
  $('.overlay').addClass('active');
});
$('.sidenav__close').on('click', function (e) {
  e.preventDefault();
  sideNav.style.left = "-300px";
  $('body').removeClass('disable');
  $('.overlay').removeClass('active');
});

// All categories btn

$('.all-categories-btn').on('click', function(){
  $('.sidebar .categories__wrapper').slideToggle();
  $(this).toggleClass('active');
});

//Resize styles

let categories = $('.sidebar .categories__wrapper');

$(window).resize(function(){
    var wid = $(window).width();
    if(wid > 992 && categories.is(':hidden')) {
        categories.removeAttr('style');    
    } 
});

//More categories

$('.more-categories-btn').on('click', function(e){
  e.preventDefault();
  $('.more-categories').slideToggle();
});

