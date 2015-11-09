$(function() {
  $("#header").click(function() {
    if($("body").hasClass("open")) {
        $("body").removeClass("open closed").addClass("closed");
    } else {
        $("body").removeClass("open closed").addClass("open");
    } 
      });
  });