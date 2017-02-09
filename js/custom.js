$(document).ready(function(){
// Offset for Site Navigation

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


  $('#siteNav').affix({
  	offset: {
  		top: 100
  	}
  });




});