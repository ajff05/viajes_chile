$(document).ready(function() {
    $('.nav-link').click(function(e) {

    var targetHref = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(targetHref).offset().top
    }, 1000);

    e.preventDefault();
    });
});