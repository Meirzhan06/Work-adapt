
$(document).ready(function() {
    $('.bars').click(function(event) {
        $('.burger-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.close-burger').click(function(event) {
        $('.burger-menu').removeClass('active');
    });
});