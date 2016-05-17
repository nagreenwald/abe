$(document).ready(function() {


  $("body").hide();

    $("body").fadeIn(3000);

    $(document).on("mouseenter", "p", function(){
      $(this).css("background-color", "yellow")
  });
  $(document).on("mouseleave", "p", function(){
    $(this).css("background-color", "white")


});
$(document).on("keyup", function(evt) {
if (evt.keyCode == 37) {
  $("#switcher").animate({
    "margin-left":"-=20px"
  });

}
if (evt.keyCode == 39) {
  $("#switcher").animate({
    "margin-left":"+=20px"
      });
}
if (evt.keyCode == 38) {
  $("#switcher").animate({
    "margin-top":"-=20px"
      });
}
if (evt.keyCode == 40) {
  $("#switcher").animate({
    "margin-top":"+=20px"
      });
}


    // $("#switcher").animate({
    //   "padding-right": "+=20px"
    // }, "swing", function () {
    //   console.log("click!");
    // });




});


$(document).on("click", "h2", function(){
  $(this).animate({
    "opacity": ".25",
    "margin-left":"20px"

  }, 50, function() {
      $(".speech").animate({
        "opacity":".5"
      })


  });
  });

  $(document).on("click", "#switcher-small", function(){
    $(".speech").css("font-size", "5px")

});

$(document).on("click", "#switcher-large", function(){
  $(".speech").css("font-size", "2em")
});
$(document).on("click", "#switcher-small", function(){
  $(".speech").css("font-size", ".75em")
});
$(document).on("click", "#switcher-default", function(){
  $(".speech").css("font-size", "1em")
});
});
