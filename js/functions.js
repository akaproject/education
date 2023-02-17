//↓ #about #adomission header scroll
$(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > 300) {
      $('.header-wrapper').css({ 'background-color': '#500778' });
    } else {
      $('.header-wrapper').css({ 'background-color': 'transparent' });
    }
  });
});
//↑#about #adomission  header scroll

// //↓#top header scroll
$(function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop != 0)
      $('.header-wrapper').stop().animate({ 'opacity': '.7' }, 1);
    else
      $('.header-wrapper').stop().animate({ 'opacity': '1' }, 1);
  });

  $('.header-wrapper').hover(
    function (e) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop != 0) {
        $('.header-wrapper').stop().animate({ 'opacity': '1' }, 100);
      }
    },
    function (e) {
      var scrollTop = $(window).scrollTop();
      if (scrollTop != 0) {
        $('.header-wrapper').stop().animate({ 'opacity': '.7' }, 300);
      }
    }
  );
});
//↑#top header scroll

//↓#about main 下線
$(window).on('scroll', function () {
  $(".lineAnimation").each(function () {
    let position = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > position - windowHeight + 180) {
      $(this).addClass('isActive');
    }
  });
});
//↑#about main 