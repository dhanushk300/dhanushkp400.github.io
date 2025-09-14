$(document).ready(function() {
  // Smooth Scroll
  $("nav a").on("click", function(e) {
    if (this.hash !== "") {
      e.preventDefault();
      var hash = this.hash;
      $("html, body").animate({
        scrollTop: $(hash).offset().top - 70
      }, 800);
    }
  });

  // Highlight active link on scroll
  $(window).on("scroll", function() {
    var scrollPos = $(document).scrollTop();
    $("nav a").each(function() {
      var section = $(this).attr("href");
      if ($(section).position() && $(section).position().top <= scrollPos + 80) {
        $("nav a").removeClass("active");
        $(this).addClass("active");
      }
    });
  });

  // Animate skill bars
  $(".skill-bar").each(function() {
    var width = $(this).data("skill");
    $(this).animate({
      width: width
    }, 1500);
  });
});
