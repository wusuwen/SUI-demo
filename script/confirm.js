$(document).on('click','.confirm-ok', function () {
    $.confirm('Are you sure?', function () {
        $.alert('You clicked Ok button');
    });
});

$(document).on('click', '.confirm-ok-cancel',function () {
    $.confirm('Are you sure?',
      function () {
        $.alert('You clicked Ok button');
      },
      function () {
        $.alert('You clicked Cancel button');
      }
    );
});
$(document).on('click','.confirm-title-ok', function () {
    $.confirm('Are you sure?', 'Custom Title', function () {
        $.alert('You clicked Ok button');
    });
});
$(document).on('click','.confirm-title-ok-cancel', function () {
    $.confirm('Are you sure?', 'Custom Title',
      function () {
        $.alert('You clicked Ok button');
      },
      function () {
        $.alert('You clicked Cancel button');
      }
    );
});