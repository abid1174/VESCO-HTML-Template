/*=============================
        services
==============================*/
$(document).ready(function () {

    // animate on scroll
    new WOW().init();
});


/*=============================
        work
==============================*/
$(document).ready(function () {
    $("#work").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=============================
        Team
==============================*/
$(document).ready(function () {
    $("#team-members").owlCarousel({
        items: 3,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 2,
            },
            768: {
                items: 3,
            }
        }
    });
});

/*=============================
        Testimonial
==============================*/
$(document).ready(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
    });
});
/*=============================
        Stats
==============================*/

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

/*=============================
        Clients
==============================*/

$(function () {
    $('#clients').owlCarousel({
        items: 6,
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            480: {
                items: 3,
            },
            768: {
                items: 5,
            }
        }
    });
});

/*=============================
        Navigation
==============================*/
// show/hide transparent black navigation

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");

            //hide back-to-top button
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");

            //show back-to-top button
            $("#back-to-top").fadeIn();
        }
    });
});

// smooth-scrolling

$(function () {

    $("a.smooth-scroll").click(function () {
        event.preventDefault();

        // get section id. e.g: #home
        var section = $(this).attr("href");

        $('html, body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });

});


// collapse mobile menu on click
$(document).ready(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    })
});