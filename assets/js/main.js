$(document).ready(function () {
// scroll to top
    var btn = $('#scroll-top');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    // slide blog detail
    
});
new WOW().init();
