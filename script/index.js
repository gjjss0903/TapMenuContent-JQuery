$(function(){

  $('.btn li').click(function(){
    $(this).addClass('active')
    $(this).siblings().removeClass('active')

    var tab = $(this).attr('data-alt')
    $('#' + tab).siblings().removeClass('active')
    $('#' + tab).addClass('active')
  })

})