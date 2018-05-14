 /*---timer---*/
document.addEventListener("DOMContentLoaded", function (event) {
    var fullTime = new Date().getTime() + 39600000; 
    $('.countdown-container').countdown(fullTime, function (event) {
        $(this).html(event.strftime(
        		'<span class="time time_hours">%H</span>'
            +'<span class="time time_minutes">%M</span>'
            +'<span class="time time_seconds">%S</span>'));
    })}); 

 /*---slowscroll--*/

$(document).ready(function(){
  $('a[href^="#"]').click(function(){
    elementClick = $(this).attr("href");
    destination = $(elementClick).offset().top;
    if($.browser){
      $('body').animate( { scrollTop: destination }, 700 );
    } else{
        $('html').animate( {scrollTop: destination}, 700 );
    }
    return false;
  });
});