$(function() {

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
    });

    $('.products-slider__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    var mixer = mixitup('.products__inner-box');




});