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

    var a = 0;
    $(window).scroll(function () {
        if ($("div").hasClass("nums")) {
            if (a === 0 && $(this).scrollTop() >= ($(".nums").offset().top) - 500) {
                $('.count span').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 1000,
                        easing: 'swing',
                        step: function (now) {
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
                a = 1
            }
        }
        if ($(this).scrollTop() >= 38) {
            $('.fixed-header').addClass("fixed-scroll");
        } else {
            $('.fixed-header').removeClass("fixed-scroll");
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
    //////////** servs slider **//////////
    var servswiper = new Swiper('.servs-slider .swiper-container', {

        pagination: {
            el: '.servs-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
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
                slidesPerView: 3,
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
    //////////** nums slider **//////////
    var numswiper = new Swiper('.nums-slider', {
        spaceBetween: 30,
        pagination: {
            el: '.nums-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                },
            },
            480: {
                slidesPerView: 2,
            },
            767: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    });

    //////////** awwards slider **//////////
    var awwardswiper = new Swiper('.awwards-slider .swiper-container', {
        navigation: {
            nextEl: '.awwards-slider .swiper-button-next',
            prevEl: '.awwards-slider .swiper-button-prev',
        },
        pagination: {
            el: '.awwards-slider .swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                autoplay: {
                    delay: 3000,
                },
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1525: {
                spaceBetween: 60,
                slidesPerView: 3,
            },
        },
    });

    //////////** serv-projects-slider **//////////
    var servProjectsswiper = new Swiper('.serv-projects-slider', {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 6000,
        },
        spaceBetween: 30,

        navigation: {
            nextEl: '.serv-projects-slider .swiper-button-next',
            prevEl: '.serv-projects-slider .swiper-button-prev',
        },
        pagination: {
            el: '.serv-projects-slider .swiper-pagination',
            clickable: true,
        },
    });
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
        $(".page-header").toggleClass("op");
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
    ///////// **fancy** /////////
    $('[data-fancybox="media"]').fancybox({
        loop: true,
        infobar: false,
        margin: [44, 0, 22, 0],

        thumbs: {
            autoStart: true,
            axis: $(window).width() <= 767 ? 'y' : 'x'
        },
        slideShow: {
            autoStart: true,
            speed: 3000
        },
    })
    ///////// **fancy** /////////
    $('[data-fancybox="project-img"]').fancybox({
        loop: true,
        infobar: false,
        arrows: $(window).width() <= 767 ? true : false,
        margin: [44, 0, 22, 0],
        buttons: [
            'close'
        ],
        thumbs: {
            autoStart: $(window).width() <= 767 ? false : true,
            axis: $(window).width() <= 767 ? 'y' : 'x'
        },
        slideShow: {
            autoStart: true,
            speed: 3000
        },
    })
});