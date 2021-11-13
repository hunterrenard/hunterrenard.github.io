$(function() {
    $('footer').footerReveal();
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();

  if (scroll >= 220) {
    $("header").addClass("nav");
    $("header h1").addClass("display");
  } else {
    $("header").removeClass("nav");
    $("header h1").removeClass("display");
  }
});


$(".fadelink").on("click", function (e) {
  if($(document).width() > 1024)
  {
    e.preventDefault(); // --> if this handle didn't run first, this wouldn't work
    let link = $(this).attr('href');
    $("body").fadeOut(200, function() {
      $(this).addClass("hide");
      window.open(link, "_blank");
      $("body").fadeIn(200, function() {
        $(this).removeClass("hide");
      });
    });
  }
});

$(document).ready(function() {
  $(".scrolllink").click(function(e) {
    e.preventDefault(); // --> if this handle didn't run first, this wouldn't work
    $('.hamburger').removeClass('is-active');
    $('.dropdownmenu').slideUp('100').removeClass('dddisplay');
    let link = $(this).attr('href')
      $('html, body').animate({
          scrollTop: $(link).offset().top
      }, 500);
  });

  $('.about').waypoint(function(direction) {
    if (direction === 'down') {

      $('.navbtns').removeClass('active');
      $('#aboutbtn').addClass('active');
    }
  }, {
    offset: '10%'
  })

  $('.about').waypoint(function(direction) {
    if (direction === 'up') {

      $('.navbtns').removeClass('active');
    	$('#aboutbtn').addClass('active');
    }
  }, {
    offset: '-10%'
  });

  $('.portfolio').waypoint(function(direction) {
    if (direction === 'down') {

      $('.navbtns').removeClass('active');
      $('#portfoliobtn').addClass('active');
    }
  }, {
    offset: '10%'
  })

  $('.portfolio').waypoint(function(direction) {
    if (direction === 'up') {

      $('.navbtns').removeClass('active');
    	$('#portfoliobtn').addClass('active');
    }
  }, {
    offset: '0%'
  });

  $('.jumbo').waypoint(function(direction) {
    if (direction === 'down') {

      $('.navbtns').removeClass('active');
    }
  }, {
    offset: '10%'
  })

  $('.jumbo').waypoint(function(direction) {
    if (direction === 'up') {

      $('.navbtns').removeClass('active');
    }
  }, {
    offset: '-25%'
  });
});

$(document).ready(function() {
  $('.contactbtn').magnificPopup({type:'inline'});
});

$(".hamburger-box").on("click", function (e) {
  $('.hamburger').toggleClass('is-active');
  $('.dropdownmenu').slideToggle('100').toggleClass('dddisplay');
});
