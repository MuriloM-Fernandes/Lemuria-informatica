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