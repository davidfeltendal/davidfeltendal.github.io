
$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    $('body').scrollspy({
        target: '.navbar'
    });
    // smooth scrolling
    $('nav a, .down-button a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    // init NanoGallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery({
            thumbnailWidth: 'auto',
            thumbnailHeight: 100,
            locationHash: false,
            thumbnailHoverEffect: 'borderLighter,imageScaleIn80',
            itemsBaseURL: 'http://nanogallery.brisbois.fr/demonstration/'
        });
    });

});