$(document).ready(function() {
  $('.current').click(function(e) {
    e.preventDefault();
    var linkHref= $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
  });
});
