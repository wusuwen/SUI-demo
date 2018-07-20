$(document).on('click', '.open-preloader', function () {
    $.showPreloader();
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  });
  $(document).on('click','.open-preloader-title', function () {
    $.showPreloader('Custom Title')
    setTimeout(function () {
        $.hidePreloader();
    }, 2000);
  });