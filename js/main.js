$('.przycisk').on('click', function() {
  const images = $('.row').position().top;

  $('html, body').animate({
      scrollTop: images
    }, 900);

});
