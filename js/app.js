


/* slider */

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    center:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:2,
            center:true
        },
        600:{
            center: true,
            items:3
        },
        1000:{
            center: true,
            items:5
        }
    }
})

/*pag whind*/

//var btn_play_whind = document.getElementsByClassName("btn-play");

function play_whind(){
    window.location.href = "whind-film.html";
}





































/*$(function(){
    alert("Jquery carregado com sucesso!")
})*/
