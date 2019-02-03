$(document).ready(function(){
    

$(function() {
    $('#navigation').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });
});

 
$('.homeSlider').bxSlider({
  auto: true,
  controls: true,
  stopAutoOnClick: true,
  pager: true,
  pagerCustom: '#bx-pager',
  adaptiveHeight: true,
  slideWidth: 600
  
});

$(".event").click(function() {
        var showthisthing = $(this).attr('data-showthis');
        $(".description").removeClass('show');
        $(showthisthing).addClass('show');
      });
    
  });