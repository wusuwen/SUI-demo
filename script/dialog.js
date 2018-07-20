$(function(){
    $(document).on('click','.alert-text',function () {
       $.alert('这里是警报文本');
    });

   $(document).on('click','.alert-text-title', function () {
       $.alert('这里是警报文本,自定义标题!');
   });

   $(document).on('click', '.alert-text-title-callback',function () {
       $.alert('这里是警报文本,自定义标题!', function () {
           $.alert('点击按钮')
       });
   });

   $(document).on('click', '.alert-text-callback',function () {
       $.alert('这里是警报文本', function () {
           $.alert('点击按钮')
       });
   });
 })