var navLinks = document.getElementById("navLinks");
function showMenu(){
    navLinks.style.right="0";

}
function hideMenu(){
    navLinks.style.right="-200px";

}

VanillaTilt.init(document.querySelector(".glassmorphic-card"), {
    max: 15,
    speed: 200,
    glare: true,
    "max-glare": 1,
});


 
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
});