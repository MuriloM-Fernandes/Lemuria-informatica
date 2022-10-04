// dropDown
$(function(){
    $('.navbar1 li').hover(

        function () {
            $('>ul.sub:not(:animated)',this).slideDown(500);
        },
        function () {
            $('>ul.sub',this).slideUp(350);
        }
    );


});

//video
window.addEventListener("load",function(){
    let video = this.window.document.querySelector("#video")
    video.play();
    video.loop = true;
});

//carousel swiper
var swiper = new Swiper(".carouselSwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//inicialização AOS fades
AOS.init({
    duration:2000,
});

// cards
if ($(window).width() < 769) {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 1,
        spaceBetween: 30,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
} else {
    var swiper = new Swiper(".aboutInner", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

}

//about
//reload
window.addEventListener('resize', function (event) {
    recarrega();
});

function recarrega() {
    document.location.reload();
};