
// Sticky Header
$(window).scroll(function () {

    if ($(window).scrollTop() > 200) {
        $('.header_menu').addClass('fixed_menu');
    } else {
        $('.header_menu').removeClass('fixed_menu');
    }
});


// curve text
$(document).ready(function () {
    $('.example').arctext({
        radius: 400
    });
});


//venobox (video open) 
$(document).ready(function () {
    $('.venobox').venobox();
});


// Counter 
jQuery('.statistic-counter').counterUp({
    delay: 20,
    time: 2000
});



