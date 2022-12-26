$(function() {
    $(window).load(function(){
        $('#loder').fadeOut('slow')
    });


    $('.slide').slick({
        arrows: false ,
        autoplay: true,
        autoplaySpeed: 5000 ,
        dots:true,
        dotsClass: 'ban_dots',
    });

    $('.recent_product_slid').slick({
        slidesToShow: 4,
        prevArrow :'<i class="fa-solid fa-chevron-left recent_slider_icon slide_icon_left"></i>',
        nextArrow :'<i class="fa-solid fa-chevron-right recent_slider_icon slide_icon_right"></i>'
    });
    
})
