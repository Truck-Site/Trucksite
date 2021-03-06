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
  slidesToScroll: 7,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint:991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
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

var $status = $('.pagingInfo');
// var $slickElement = $('.slideshow');

$('.slider-for').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + ' of ' + slick.slideCount);
});

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: true,
  asNavFor: '.slider-nav',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: false        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
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
  var link = $(this);
  $('.more-categories').slideToggle(function(){
      if ($(this).is(":visible")) {
        link.children('span').text('Less');
      } else{
        link.children('span').text('More');
      }    
  });
});


//Hide tables
    var table = $('.vehicle__tables figure .table-wrapper');

    $('.vehicle__tables figure h3').each(function(){
      $(this).on('click', function(){
        $(this).next(table).slideToggle();
      })
    })

  // if(window.innerWidth < 768){

  // }
// $(window).resize(function (e) {

// });


// Search

let sectionSearch = $('.search__block');
let searchBtn = $('header .header__search');

searchBtn.on('click',function(){
  sectionSearch.slideToggle();
});

