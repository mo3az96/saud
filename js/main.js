$(window).on('load', function () {
    $('.pre-loader').fadeOut("500", function () {
        $(this).remove();
        $("body").removeClass("overflow");
    });
});
$(document).ready(function () {
    new WOW().init();

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 10) {
            $("header").addClass("header-scroll");
        } else {
            $("header").removeClass("header-scroll");
        }
    });
    //////////** down-btn **//////////
    $(".down-btn").click(function () {
        $('html, body').animate({
            scrollTop: $("#sec-sec").offset().top
        }, 1500);
    });
    $(window).scroll(function () {
        $(this).scrollTop() >= 500 ? $(".arrow-top").fadeIn(500) : $(".arrow-top").fadeOut(500);
    });


    $(".arrow-top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1500);
    });
    //////////** projects slider **//////////
    var projectswiper = new Swiper('.projects-slider .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.projects-slider .swiper-button-next',
            prevEl: '.projects-slider .swiper-button-prev',
        },
        pagination: {
            el: '.projects-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        },
    });

    //////////** updates slider **//////////
    var updateswiper = new Swiper('.updates-slider .swiper-container', {
        loop: true,
        pagination: {
            el: '.updates-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        },
    });

    //////////** client Slider **//////////
    if ($(window).width() <= 991) {
        $(".client-item").unwrap("");
        $(".client-item").wrap("<div class='swiper-slide'></div>");
        $(".clients-wraper").addClass("swiper-wrapper");

        var clientswiper = new Swiper('.clients-slider', {
            spaceBetween: 30,
            loop: true,
            autoplay: {
                delay: 5000,
            },
            pagination: {
                el: '.clients-slider .swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,

                },
                480: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 4,
                },
                992: {
                    slidesPerView: 5,
                },
            },
        });
    }

    ///////// **footer** /////////
    if ($(window).width() <= 767) {
        $(".foot-acc").addClass("mo-accordion");
        $(".footer-ul").addClass("mo-panel");
    }
    ///////// **ACC** /////////
    $('.mo-accordion').click(function () {
        $(".mo-accordion").not(this).removeClass("active");
        $(this).toggleClass("active");
        if ($(this).siblings().css('display') == 'none') {
            $(this).siblings().slideDown(500);
        } else {
            $(this).siblings().slideUp(500);
        }
        $(".mo-accordion").not(this).siblings().slideUp(500);
    })
    ///////// **menu** /////////
    $(".menu-icon").click(function () {
        $('nav').slideToggle("300", function () {
            $("nav").toggleClass("nav-in");
        });
        $(".main").toggleClass("op");
        $("body").toggleClass("overflow");
        $(".menu-icon").toggleClass("active");
        if ($(window).width() <= 767) {
            $(".langs").fadeToggle("300");
        }
    });
    if ($(window).width() <= 1199) {
        $('.drop-btn .nav-a').removeAttr("href")
        $('.drop-btn .nav-a').click(function () {
            $(".drop-btn .nav-a").not(this).removeClass("active");
            $(this).toggleClass("active");
            if ($(this).siblings().css('display') == 'none') {
                $(this).siblings().slideDown(500);
            } else {
                $(this).siblings().slideUp(500);
            }
            $(".drop-btn .nav-a").not(this).siblings().slideUp(500);
        })
    }
});