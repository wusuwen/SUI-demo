$(document).on('click','.open-indicator', function () {
    $.showIndicator();
    setTimeout(function () {
        $.hideIndicator();
    }, 2000);
});