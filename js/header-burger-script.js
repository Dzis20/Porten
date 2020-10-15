$(document).ready(function() {
    $('.burger-menu').click(function(event) {
        $('.burger-menu,.menu-right').toggleClass('active');
        $('body').toggleClass('lock');
    });
 });

