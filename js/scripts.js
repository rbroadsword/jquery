
$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });

  $(".sclick").click(function() {
    $("#smokey-showing").fadeToggle();
    $("#smokey-hidden").fadeToggle();
  });

  $(".kclick").click(function() {
    $("#sathy-showing").slideToggle();
    $("#sathy-hidden").slideToggle();
  });
});