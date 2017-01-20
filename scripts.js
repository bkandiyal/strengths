$(document).ready(function() {
  $('.expand-square').one('click', expand_mobile);

  $(".square").hover(function() {
    expand(this);
  }, function() {
    restore(this);
  });

  function expand_mobile() {
    expand($(this).parent());
    $(this).one('click', restore_mobile);
  }

  function restore_mobile() {
    restore($(this).parent());
    $(this).one('click', expand_mobile);
  }

  function expand(item) {
    if ($(item).is(':animated') || $(item).attr('data-oldheight')) return;
    var oldHeight = $(item).height();
    var newHeight = $(item).get(0).scrollHeight;
    $(item).attr('data-oldheight', oldHeight);
    $(item).stop(true,true).animate({
      height: newHeight
    });
    $(item).find(".content").delay(800).stop(true,true).animate({"opacity":"1"}, 800);
  }

  function restore(item) {
    var oldHeight = $(item).attr('data-oldheight');
    if (!oldHeight) return;
    $(item).removeAttr('data-oldheight');
    $(item).stop(true, true).animate({
      height: oldHeight
    });
    $(item).find(".content").delay(100).stop(true,true).animate({"opacity":"0"}, 400);
  }
});
