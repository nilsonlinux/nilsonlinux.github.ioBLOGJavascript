var $contactForm = $("#contact-form");

$contactForm.submit(function(e) {
  e.preventDefault();
  var $submit = $("input:submit", $contactForm);
  var defaultSubmitText = $submit.val();

  $.ajax({
    url: "//formspree.io/" + "mail" + "@" + "melograf" + "." + "com",
    method: "POST",
    data: $(this).serialize(),
    dataType: "json",
    beforeSend: function() {
      //$contactForm.append("<div class="alert alert--loading">Sending message…</div>");
      $submit.attr("disabled", true).val("Sending message…");
    },
    success: function(data) {
      $contactForm.append( "<div class='success'>Message sent successfully! Thanks for getting in touch&mdash;I\'ll reply to you soon.</div>" );
      $submit.val("Message sent!");
      $("#contact-form")[0].reset();
      setTimeout(function() {
        $(".success").fadeOut( function() {
          $(this).remove();
        });
        $submit.attr("disabled", false).val(defaultSubmitText);
      }, 5000);
    },
    error: function(err) {
      //$contactForm.find(".alert--loading").hide();
      $contactForm.append( "<div class='error'>Oh dear! We encountered an error while sending your message. Message not sent.</div>" );
      $submit.val("Sending failed, sorry.");
      setTimeout(function() {
        $(".error").fadeOut( function() {
          $(this).remove();
        });
        $submit.attr("disabled", false).val(defaultSubmitText);
      }, 5000);
    }
  });
});
