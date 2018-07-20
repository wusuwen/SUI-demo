$(function() {
    // 最多可加载的条目
    var maxItems = 100;

    // 每次加载添加多少条目
    var itemsPerLoad = 20;

    function addItemsTop(number, lastIndex) {
      // 生成新条目的HTML
      var html = '';
      for (var i = lastIndex+ number; i > lastIndex ; i--) {
        html += '<li class="item-content"><div class="item-inner"><div class="item-title">条目'+i+'</div></div></li>';
      }
      // 添加新条目
      $('.infinite-scroll .list-container').prepend(html);

    }
    var timer = false;
    $(document).on('infinite', '.infinite-scroll-top',function() {
      var lastIndex = $('.infinite-scroll-top .list-block li').length;
      var lastLi = $(".list-container li")[0];
      var scroller = $('.infinite-scroll-top');
      var scrollHeight = scroller[0].scrollHeight; // 获取当前滚动元素的高度
      // 如果正在加载，则退出
      if (timer) {
        clearTimeout(timer);
      }

      // 模拟1s的加载过程
      timer = setTimeout(function() {

        addItemsTop(itemsPerLoad,lastIndex);
       
        $.refreshScroller();
       
        // 将滚动条的位置设置为最新滚动元素高度和之前的高度差
        scroller.scrollTop(scroller[0].scrollHeight - scrollHeight);
      }, 1000);
    });
})