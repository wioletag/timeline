$(function() {
  'use strict';

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("resize", setLiPosition);
  window.addEventListener("scroll", callbackFunc);

  // funciton to return mobile width
  function mobileWidth() {
    var size = "";
    if ($('#mobile-md-indicator').is(':visible')) {
      size = "md";
    }
    else if ($('#mobile-sm-indicator').is(':visible')) {
      size = "sm";
    }
    else {
      size = "lg";
    }

    return size;
  }

  function setLiPosition() {
    var count = 0;
    var mWidth = mobileWidth();

    // set position for timeline li elements
    $('.event div').each(function(){
        if ( count % 2 == 0 ) {
          $(this).css('left', '45px');
          //$(this).css('transform', 'translate3d(200px, 0, 0)');
        }
        else {
          if (mWidth === "lg") {
            $(this).css('left', '-439px');
          } else if (mWidth === "md") {
            console.log("md");
            $(this).css('left', '-289px');
          } else {
             $(this).css('left', '45px');
          }
        }
      count ++;
    });
  }
  setLiPosition();

});