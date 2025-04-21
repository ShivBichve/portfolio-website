// Preloader Code

let loader = document.getElementById("preloader");
let tf__banner__text = document.querySelector(".tf__banner-text");
let tf__banner_img = document.querySelector(".tf__banner_img");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.transform = "rotate(40deg) translateY(1500px)";
        tf__banner__text.style.transform = "rotate(0deg) translateX(0px)";
        tf__banner_img.style.transform = "translateY(0px) rotate(0deg)";
    }, 2000);
});

// Preloader Code

// Countdown Code
$.fn.jQuerySimpleCounter = function (options) {
    var settings = $.extend({
        start: 0,
        end: 100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options);

    var thisElement = $(this);

    $({ count: settings.start }).animate({ count: settings.end }, {
        duration: settings.duration,
        easing: settings.easing,
        step: function () {
            var mathCount = Math.ceil(this.count);
            thisElement.text(mathCount);
        },
        complete: settings.complete
    });
};

$('#number1').jQuerySimpleCounter({ end: 100, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 800, duration: 3000 });
// Countdown Code

/* AUTHOR LINK */
$('.about-me-img').hover(function () {
    $('.authorWindowWrapper').stop().fadeIn('fast').find('p').addClass('trans');
}, function () {
    $('.authorWindowWrapper').stop().fadeOut('fast').find('p').removeClass('trans');
});