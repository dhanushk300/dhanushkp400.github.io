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

  // Reveal sections on scroll
  $(window).on("scroll", function() {
    $("section").each(function() {
      var top = $(this).offset().top - window.innerHeight + 100;
      if ($(window).scrollTop() > top) {
        $(this).addClass("show");
      }
    });
  });

  // Animate skill bars when skills page loads
  if ($("#skills").length) {
    $(".skill-bar").each(function() {
      var width = $(this).data("skill");
      $(this).animate({ width: width }, 2000);
    });
  }
});
