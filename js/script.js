$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive:{
        0:{
            items:1
        },
        480:{
            items:2
        },
        760:{
            items:3
        }
    }
});