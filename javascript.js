// counter number in counter section on service section
jQuery(window).scroll(startCounter);

function startCounter() {
  var hT = jQuery(".count").offset().top,
    hH = jQuery(".count").outerHeight(),
    wH = jQuery(window).height();
  if (jQuery(window).scrollTop() > hT + hH - wH) {
    jQuery(window).off("scroll", startCounter);
    jQuery(".count").each(function () {
      var $this = jQuery(this);
      jQuery({
        Counter: 0,
      }).animate(
        {
          Counter: $this.text(),
        },
        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.ceil(this.Counter));
          },
        }
      );
    });
  }
}
// closing modal navigation on smaller screen
$(".deleteMeetingClose").click(function () {
  $("#myModal").fadeOut("fast");
});

$(document).ready(function () {
  // Initialize the plugin
  $("#JPO").popup({
    scrolllock: true,
  });

  // Set default `pagecontainer` for all popups (optional, but recommended for screen readers and iOS*)
  $.fn.popup.defaults.pagecontainer = "#page";
});
$("#fade").popup({
  transition: "all 0.3s",
});
//  when click on hamburger menu open the navigation div
$(document).ready(function () {
  $(".nav-opens").click(function () {
    $(".menu").toggle();
  });
});

// if hover over dropdown then display dropdown menu
$(".subb").mouseover(function () {
  $(".sub-menu").toggle();
});
// hide the submenu so that it can display only on hover
$(document).ready(function () {
  $(".sub-menus").hide();
});
// in navigation modal on smaller screen,toggle dropdown menu on clicking dropdown
$(".modalsub").click(function () {
  $(".sub-menus").toggle();
});

// when click on sub dropdown, donot allow navigation to top
$(".subb").on("click", function (e) {
  e.stopPropagation();
});
// breakpoints used for slick slider
var breakpoint = {
  // Small screen / phone
  sm: 576,
  // Medium screen / tablet
  md: 768,
  // Large screen / desktop
  lg: 992,
  // Extra large screen / wide desktop
  xl: 1200,
};

// slick slider
$("#slick").slick({
  autoplay: true,
  autoplaySpeed: 2000,
  draggable: true,
  infinite: true,
  dots: true,
  arrows: false,
  speed: 1000,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: breakpoint.sm,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: breakpoint.md,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: breakpoint.lg,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: breakpoint.xl,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
});
$(window).load(function () {
  $(".container").isotope({
    filter: ".all",
  });
});

$(".container").isotope({
  // options
  itemSelector: ".gallery",
  layoutMode: "fitRows",
});
// filter items on button click
$(".filters ul li a").click(function () {
  $(".filters ul li a ").removeClass("active");
  $(this).addClass("active");
  var filterValue = $(this).attr("data-filter");
  $(".container").isotope({
    filter: filterValue,
  });
});

$(document).ready(function () {
  $(".venobox").venobox();
});
// if window size is greater than 992px then fix the navbar on top
if ($(window).width() > 992) {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
      // remove padding top from body
      $("body").css("padding-top", "0");
    }
  });
}
// styling for navabr when user scrolls
$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 54) {
      $(".navbar").css("background", "#0f1524");
      $(".navbar").addClass("scrolled-nav");
    } else {
      $(".navbar").css("background", "transparent");
      $(".navbar").removeClass("scrolled-nav");
    }
  });
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);

  //smoothscroll
  $('a[href^="#"]').on("click", function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $("a").each(function () {
      $(this).removeClass("active");
    });
    $(this).addClass("active");

    var target = this.hash,
      menu = target;
    $target = $(target);
    $("html, body")
      .stop()
      .animate(
        {
          scrollTop: $target.offset().top + 2,
        },
        500,
        "swing",
        function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
        }
      );
  });
});

// Use Your Class or ID For Selection

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $(" .navigation .nav-item a").each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (
      refElement.position().top <= scrollPos &&
      refElement.position().top + refElement.height() > scrollPos
    ) {
      $(".navigation .nav-item a").removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}
