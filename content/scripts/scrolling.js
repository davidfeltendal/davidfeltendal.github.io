
$(function() {
    $(window).on("load resize", function() {
        $(".fill-screen").css("height", window.innerHeight);
    });

    // add Bootstrap's scrollspy
    //$('body').scrollspy({
    //    target: '.navbar'
    //});
    // smooth scrolling
    $('nav a, .down-button a').bind('click', function() {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 100
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
(function () {
    var dialog = document.getElementById('window');
    document.getElementById('btn-message').onclick = function () {
        dialog.show();
    };
    document.getElementById('exit').onclick = function () {
        dialog.close();
    };
})();