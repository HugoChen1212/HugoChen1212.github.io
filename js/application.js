$(document).ready(function() {
  $('.current').click(function(e) {
    e.preventDefault();
    var linkHref= $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
  });
});

$('#contact-form').submit(function(e){
  var name = document.getElementById('inputName'),
      email = document.getElementById('inputEmail'),
      note = document.getElementById('inputNote');

  if (!name.value || !email.value || !note.value) {
      alertify.error('Please check your entries')
  } else{
    $.ajax({
      url: "https://formspree.io/hugochen1212@gmail.com",
      method: "POST",
      data: $(this).serialize(),
      dataType: "json"
    });

    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Message send')
  }
})