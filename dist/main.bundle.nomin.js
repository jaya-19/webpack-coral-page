/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

$(document).ready(function () {
  $('.multiple-items').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }]
  });
  $(".show-mobile").hide();
  $(".fa-xmark").hide();
  $(".humburger").click(function () {
    $(".bottom-nav").slideToggle(function () {
      var isNavVisible = $(".bottom-nav").is(":visible");
      $(".fa-bars").toggle(!isNavVisible);
      $(".fa-xmark").toggle(isNavVisible);
    });
    $(".show-mobile").toggle();
  });
  $(".footer-humburger-1").click(function () {
    $(".footer-1").slideToggle(function () {
      var isNavVisible = $(".footer-1").is(":visible");
      $(".open-1").toggle(!isNavVisible);
      $(".close-1").toggle(isNavVisible);
    });
  });
  $(".footer-humburger-2").click(function () {
    $(".footer-2").slideToggle(function () {
      var isNavVisible = $(".footer-2").is(":visible");
      $(".open-2").toggle(!isNavVisible);
      $(".close-2").toggle(isNavVisible);
    });
  });
  $(".footer-humburger-3").click(function () {
    $(".footer-3").slideToggle(function () {
      var isNavVisible = $(".footer-3").is(":visible");
      $(".open-3").toggle(!isNavVisible);
      $(".close-3").toggle(isNavVisible);
    });
  });
});
/******/ })()
;