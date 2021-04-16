"use strict";

$(document).ready(function () {
  $('.menu-btn').click(function () {
    $('.menu').addClass('open');
    $('.close-btn').focus();
  });
  $('.close-btn').click(function () {
    $('.menu').removeClass('open');
    $('.menu-btn').focus();
  });
  $(document).keyup(function (e) {
    if (e.key === "Escape" && $('.menu').hasClass('open')) {
      $('.menu').removeClass('open');
      $('.menu-btn').focus();
      console.log('hi');
    }
  });
  var topPadding = '60px';
  var topScrollPadding = '30px 60px';
  var wWidth = $(window).width();

  if (wWidth <= 768) {
    topPadding = '30px';
    topScrollPadding = '30px';
  }

  $('.menu').scroll(function () {
    var menuTop = $('.menu').scrollTop();

    if (menuTop > 30) {
      $('.menu .menu-top').css({
        'padding': topScrollPadding,
        'background-color': '#fff',
        'box-shadow': '0px 2px 6px rgba(0, 0, 0, .2)'
      });
    } else {
      $('.menu .menu-top').css({
        'box-shadow': 'none',
        'padding': topPadding,
        'background-color': 'transparent'
      });
    }

    if (menuTop > 30) {
      $('.menu .menu-top').css({
        'padding': topScrollPadding,
        'background-color': '#fff',
        'box-shadow': '0px 2px 6px rgba(0, 0, 0, .2)'
      });
    } else {
      $('.menu .menu-top').css({
        'box-shadow': 'none',
        'padding': topPadding,
        'background-color': 'transparent'
      });
    }
  });
  $('.soda-toggle').click(function () {
    var parent = $(this).parent('.category');

    if (parent.hasClass('open')) {
      parent.removeClass('open');
    } else {
      parent.addClass('open');
    }
  });
});