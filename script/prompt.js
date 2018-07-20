$(document).on('click','.prompt-ok', function () {
    $.prompt('What is your name?', function (value) {
        $.alert('Your name is "' + value + '". You clicked Ok button');
    });
});

$(document).on('click','.prompt-ok-cancel', function () {
    $.prompt('What is your name?',
      function (value) {
        $.alert('Your name is "' + value + '". You clicked Ok button');
      },
      function (value) {
        $.alert('Your name is "' + value + '". You clicked Cancel button');
      }
    );
});
$(document).on('click', '.prompt-title-ok',function () {
    $.prompt('What is your name?', 'Custom Title', function (value) {
        $.alert('Your name is "' + value + '". You clicked Ok button');
    });
});
$(document).on('click', '.prompt-title-ok-cancel',function () {
    $.prompt('What is your name?', 'Custom Title',
      function (value) {
        $.alert('Your name is "' + value + '". You clicked Ok button');
      },
      function (value) {
        $.alert('Your name is "' + value + '". You clicked Cancel button');
      }
    );
});