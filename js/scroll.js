$(document).ready(function() {
    $('.up').click(function(){
       $('html, body').animate({scrollTop:$('#up').position().top - 60}, 2000);
    });

    $(window).scroll(function(){
      if($(window).scrollTop()>200){
        $('.up').show()
      } else {
        $('.up').hide()
      }
    });
});
