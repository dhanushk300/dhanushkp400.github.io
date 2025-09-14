$(window).on("scroll", function() {
  // Animate skill bars
  $("#skills .skill-bar").each(function() {
    let barPos = $(this).offset().top;
    let windowPos = $(window).scrollTop() + $(window).height();
    if (windowPos > barPos) {
      $(this).css("width", $(this).data("skill"));
    }
  });
});
