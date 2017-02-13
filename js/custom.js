$(document).ready(function(){
// Offset for Site Navigation
  AOS.init({
    easing: 'ease-in-sine'
  });

  var motivationSection = $('motivation-section'),
    nav = $('nav'),
    nav_height = nav.outerHeight();


    $('#navbar > ul > li > a').on('click', function(){
      $('#navbar > ul > li').find('a').removeClass('navActive');
      $(this).addClass('navActive');
    });

  nav.find('a').on('click', function(){
    var $el = $(this), id =  $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height}, 500);

    return false;
  });

  $('#features-button, #github-button').on('click', function(){
    var $el = $(this), id =  $el.attr('href');

    $('html, body').animate({
      scrollTop: $(id).offset().top - nav_height}, 500);

    return false;
  });

  $(window).on('scroll', function(){
    var scrollPos = $(window).scrollTop();

    $('#navbar > ul > li > a').each(function(){
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));

        if (refElement.position().top <= scrollPos + 95 && refElement.position().top + refElement.height() > scrollPos - 95) {
              $('#navbar > ul > li > a').removeClass("navActive");
              currLink.addClass("navActive");
        }
        else{
            currLink.removeClass("navActive");
        }
      });
  });

  $('#siteNav').affix({
  	offset: {
  		top: 100
  	}
  });

});
