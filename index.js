$('.element').each(function() {
  $(this).mouseover(function() {
      $(this).addClass('active');
    $('.stage').children('.element').not('.active').addClass('inactive');
  });
  $(this).mouseleave(function() {
      $(this).removeClass('active');
      $('.stage').children('.element').not('.active').removeClass('inactive');
  });
});
document.addEventListener('scroll', function() {
  var header = document.getElementById('scrollingHeader');
  if (window.pageYOffset > 700) {
      header.classList.add('show-header');
  } else {
      header.classList.remove('show-header');
  }
});

