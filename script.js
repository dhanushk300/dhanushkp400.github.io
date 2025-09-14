// Fade-in sections on scroll
$(window).on('scroll', function() {
  $('section').each(function() {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top + 100) {
      $(this).addClass('show');
    }
  });
  // Animate skill bars if Skills section exists
  $("#skills .skill-bar").each(function() {
    let barPos = $(this).offset().top;
    let windowPos = $(window).scrollTop() + $(window).height();
    if (windowPos > barPos) {
      $(this).css("width", $(this).data("skill"));
    }
  });
});

