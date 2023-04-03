$(document).ready(function () {
    //풀 메뉴 스크립트
    $(".move_btn").click(function (event) {
        $(this).toggleClass("active");
        $(".fullmeun").toggleClass("active");
    });
    //탭 메뉴 스크립트
    $('.category-list ul li').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.category-list ul li').removeClass('current');
        $('.category-container .tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    });
    $(".Depth1").click(function (event) {
        if($(this).hasClass("on") == true ){
            $(this).removeClass("on");
        } else{
            $(".Depth1").removeClass("on");
            $(this).addClass("on");
        };
    });
});

window.addEventListener(`resize`, function () {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (width >= 1024) {
        
    } else {
        
    }
});

window.addEventListener('scroll', function () {
    var scroll = $(window).scrollTop();

    if (scroll > 85) {
        $('header').addClass("fixed-header");
    } else {
        $('header').removeClass("fixed-header");
    }
});

var mainSwiper = new Swiper(".main", {
    slidesPerView: 1,
    spped: 3000,
    loop: true,
    effect: "fade",
    touchRatio: 0,
    // autoplay: {
    //     delay: 4000, //4초의 딜레이를 주고 자동 재생된다
    //     disableOnInteraction: false, //좌우 버튼 클릭 시 오토플레이 멈춤오류 코드
    // },
    pagination: {
        el: ".swiper-pagination-fraction",
        type: "fraction",
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                ' / ' +
                '<span class="' + totalClass + '"></span>';
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375:{
            touchRatio: 1,
        },
        768: {
            touchRatio: 1,
        },
        1024: {
            touchRatio: 1,
        },
        1025: {
            touchRatio: 0,
        },
    },
});

var pagingSwiper = new Swiper(".main", {
    loop: true,
    effect: "fade",
    touchRatio: 0,
    spped: 3000,
    pagination: {
        el: ".swiper-pagination-progress",
        type: "progressbar",
    },
});

mainSwiper.controller.control = pagingSwiper;

var reviewSwiper = new Swiper(".swiper-container", {
    slidesPerView: 2.6,
    loop: true,
    loopAdditionalSlides: 2,
    spaceBetween: 20,
    navigation: {
        nextEl: ".riview.swiper-button-next",
        prevEl: ".riview.swiper-button-prev",
    },
});

var slide = 0;
$('.btn_pause').click(function () {
    if (slide == 0) {
        $('.btn_pause').addClass('on');
        mainSwiper.autoplay.stop();
        slide = 1;
    } else {
        $('.btn_pause').removeClass('on');
        mainSwiper.autoplay.start();
        slide = 0;
    }
});
