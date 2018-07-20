$(document).on('click','.open-3-modal', function () {
    $.modal({
      title:  'Modal with 3 buttons',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      buttons: [
        {
          text: 'B1',
          onClick: function() {
            $.alert('You clicked first button!')
          }
        },
        {
          text: 'B2',
          onClick: function() {
            $.alert('You clicked second button!')
          }
        },
        {
          text: 'B3',
          bold: true,
          onClick: function() {
            $.alert('You clicked third button!')
          }
        },
      ]
    })
    });
    $(document).on('click','.open-slider-modal', function () {
    var modal = $.modal({
      title: 'Awesome Photos?',
      text: 'What do you think about my photos?',
      afterText:  '<div class="swiper-container" style="width: auto; margin:5px -15px -15px">'+
                    '<div class="swiper-pagination"></div>'+
                    '<div class="swiper-wrapper">'+
                      '<div class="swiper-slide"><img src="..." height="150" style="display:block"></div>' +
                      '<div class="swiper-slide"><img src="..." height="150" style="display:block"></div>'+
                    '</div>'+
                  '</div>',
      buttons: [
        {
          text: 'Bad :('
        },
        {
          text: 'Awesome!',
          bold: true,
          onClick: function () {
            $.alert('Thanks! I know you like it!')
          }
        },
      ]
    })
    $.swiper($$(modal).find('.swiper-container'), {pagination: '.swiper-pagination'});
    });

    $(document).on('click','.open-tabs-modal', function () {
    $.modal({
      title:  '<div class="buttons-row">'+
                '<a href="#tab1" class="button active tab-link">Tab 1</a>'+
                '<a href="#tab2" class="button tab-link">Tab 2</a>'+
              '</div>',
      text: '<div class="tabs">'+
              '<div class="tab active" id="tab1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis nunc non dolor euismod feugiat. Sed at sapien nisl. Ut et tincidunt metus. Suspendisse nec risus vel sapien placerat tincidunt. Nunc pulvinar urna tortor.</div>'+
              '<div class="tab" id="tab2">Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae</div>'+
            '</div>',
      buttons: [
        {
          text: 'Ok, got it',
          bold: true
        },
      ]
    })
    });

    $(document).on('click','.open-vertical-modal', function () {
    $.modal({
      title:  'Vertical Buttons Layout',
      text: 'Vivamus feugiat diam velit. Maecenas aliquet egestas lacus, eget pretium massa mattis non. Donec volutpat euismod nisl in posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae',
      verticalButtons: true,
      buttons: [
        {
          text: 'Button 1',
          onClick: function() {
            $.alert('You clicked first button!')
          }
        },
        {
          text: 'Button 2',
          onClick: function() {
            $.alert('You clicked second button!')
          }
        },
        {
          text: 'Button 3',
          onClick: function() {
            $.alert('You clicked third button!')
          }
        },
      ]
    })
    });