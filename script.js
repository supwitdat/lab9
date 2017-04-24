$(document).ready(function(){

  $('ul').hide();

  $('ul').fadeIn(3000);

  $("li").on('mouseenter mouseleave', function () {
      $(this).toggleClass('faded');
  });

      $("li").on('click', function () {
          $(this).toggleClass('backgroundShift');


          $(this).text('clicked');

          $(this).animate({top: '50px'}, 5000).delay(1000).animate({bottom: '50px'}, 5000);

      });

  $('#smiley').hide();
  $('#smiley').fadeIn(3000).animate({ left: '500px'}, 3000).hide('slow');




});
