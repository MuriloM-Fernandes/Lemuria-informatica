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