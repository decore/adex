$(document).ready(function(){

// Fixed menu
$(function () {
    $(window).scroll(function(event) {
        if($(this).scrollTop() > 150) {
        $("body").addClass('fixed')
    }
    else {
        $("body").removeClass('fixed')
    }
    });
});

// Open hidden part
  $('.search-switch .link').click(function(){
    $('.adv-search').toggleClass('hidden');
    $('.search-switch .link').toggleClass('hidden');
  });

  $('.title-block .link-open').click(function(){
  	$(this).toggleClass('minus');
  	$('.category').toggleClass('hidden');
  })

  $('.review-item .link-open').click(function(){
  	$(this).parent().find('.link-open').toggleClass('minus');
  	$(this).parent().find('.link-open').toggleClass('hidden');
  	$(this).parent().parent().find('table .tr-hidden').toggleClass('hidden');
  })

// Select styling
  $('select').selectbox();

// Datepicker
$('.input-range-group .input-group-addon img').click(function(){
  $(this).parent().prev().datepicker('show');
});

$('.date').datepicker({
  language:'ru',
  autoclose: 'true',
  format: 'dd/mm/yyyy',
  orientation: 'top left'
});

$('.input-range-group').each(function(){
  var startDate = $(this).find('.date-in');
  var endDate = $(this).find('.date-out');
  $(this).datepicker({
    language:'ru',
    autoclose: 'true',
    format: 'dd/mm/yyyy',
    orientation: 'top left',
    inputs: [startDate, endDate]
  }).on('show', function(e){
    $('.datepicker .selected').eq(1).css({background: 'red'});
  });
});

// Footable
  $('.footable').footable({
    breakpoints: {
      tablet: 600
    }
  });

// Contacts show and hide
  $('.contacts-link').click(function(){
    if ( $('#block').css('display') == 'none' ) {
   $('#block').animate({height: 'show'}, 1000);
    $('.contacts-link img').attr('src','img/base/opened.png');
  } else {
  $('#block').animate({height: 'hide'}, 1000);
   $('.contacts-link img').attr('src','img/base/closed.png');
  }
  });
 
  $('.main').on('DOMMouseScroll mousewheel', function (e) {
  if(e.originalEvent.detail > 0 || e.originalEvent.wheelDelta < 0) {
    //scroll down
    if ( $('#block').css('display') == 'none' ) {
      $('#block').animate({height: 'show'}, 1000);
    }
    $('.contacts-link img').attr('src','img/base/opened.png');
  } else {
    //scroll up
     if ( $('#block').css('display') == 'block' ) {
   $('#block').animate({height: 'hide'}, 1000);
    }
     $('.contacts-link img').attr('src','img/base/closed.png');
  }
  //prevent page fom scrolling
  return false;
  });

});
