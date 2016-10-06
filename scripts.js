$(document).ready(function() {
  $(".square").mouseenter(function() {
    $(this).stop(true,true).animate({
      height: '+=220px'
    });
  $(this).find(".content").delay(800).stop(true,true).animate({"opacity":"1"}, 800);
  });
  $(".square").mouseleave(function(){
    $(this).stop(true,true).animate({
      height: '-=220px'
    });
  $(".content").delay(100).stop(true,true).animate({"opacity":"0"}, 400);
  });
});
