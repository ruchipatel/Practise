$(document).ready(function() {
//$('.animation').css('opacity',0);
var scrollTop = $(window).scrollTop();
var window_height = $(window).height();
var srollBottom = scrollTop + window_height;
/*get current seconds*/
function myTimer() {
var d = new Date();
var n = d.getSeconds();
// console.log(n);
}
var myVar = setInterval(myTimer, 1000);
function animation()
{
$('.animation').each(function()
{
// alert();
var animation_name = $(this).attr("data_animation");
var animation_delay = $(this).attr("animation-delay");
var object = $(this).offset();
var offsettop = object.top;


if(!$(this).hasClass(animation_name)){
if(srollBottom > offsettop)
{
$(this).addClass(animation_name);
$(this).addClass('delay'+ animation_delay);
}
}
})

}
$(window).scroll(function(){
scrollTop = $(window).scrollTop();
window_height = $(window).height();
srollBottom = scrollTop + window_height;
lineHeight = scrollTop + 100;
/*increase the height of line based on scroll*/
var s = $(window).scrollTop(),
d = $(document).height(),
c = $(window).height();
scrollPercent = (s / (d - c)) * 100;
var position = scrollPercent;
$('.line').css('height',position + '%');
//$('.line2').css('width',position + '%');
animation();

})
animation();


$('.slider').slick({
    dots: true,
    slidesPerRow: 3,
    rows: 2,
    responsive: [
    {
      breakpoint: 767,
      settings: {
        slidesPerRow: 1,
        rows: 1,
      }
    }
  ]
});

/*responsive menu*/
// navigation dropdown

$(".top-nav > li").each(function(index, el) {
if ($(el).find(" > ul").length != 0) {
$(el).addClass('has-submenu').prepend('<i class="submenu-i"></i>');
$(el).find(" > ul > li").each(function(index2, el2) {
if ($(el2).find(" > ul").length != 0) {
$(el2).addClass('has-sub-submenu').prepend('<i class="sub-submenu-i"></i>');
}
});
}
});

$("body").on('click', 'li.has-submenu > i, li.has-sub-submenu > i', function(eve) {
$(this).siblings("ul").slideToggle();
$(this).toggleClass('active');
eve.preventDefault();
})
$('.top-nav li ul li ul li').each(function() {
if ($(this).hasClass("active")) {
$(this).parent().css("display", "block");
$(this).parent().parent().find('.submenu-i').addClass('active');
}
/* else
{
$(this).parent().parent().find('.submenu-i').removeClass('active');
}*/
});
$('.menu-icon').click(function(){
if($(window).width() < 768)
{
$('.top-nav').slideToggle();
}
})
/*accordian*/
$('.accordian > li > a').click(function(e){
  e.preventDefault();
  $(this).siblings("div").slideToggle();
  })

$('.accordian1 > li > a').click(function(e){
  e.preventDefault();

  if($(this).hasClass('active'))
  {
    $(this).removeClass('active');
    $(this).siblings("div").slideUp();
  }
  else{
    $(this).parent().parent().find('li > a').removeClass('active');
    $(this).parent().parent().find('li > a').siblings("div").slideUp();
    $(this).siblings("div").slideToggle();
    $(this).addClass('active');
  }

})





$('.accordian3 > li > a').click(function(e){
  e.preventDefault();

  if($(this).hasClass('active'))
  {
    $(this).removeClass('active');
    $(this).siblings("div").slideUp();
  }
  else{
    $(this).parent().parent().find('li > a').removeClass('active');
    $(this).parent().parent().find('li > a').siblings("div").slideUp();
    $(this).siblings("div").slideToggle();
    $(this).addClass('active');
  }

})

/*add clice on click li*/
  $(".circle li").click(function(event) {
        event.preventDefault();
        event.stopPropagation();
        var ind = $(this).closest('li').index();
        $(".info-wheel .info").not(':eq(' + ind + ')').removeClass('active');
        $(".info-wheel .info").eq(ind).addClass('active');
        $(".circle li").not($(this).closest('li')).removeClass('active')
        $(this).closest('li').toggleClass('active');
    });


/*autoplay fade slider*/
setInterval(rotateImages, 4000);
function rotateImages(){
  var curPhoto = $("#photoShow div.current");
  var nxtPhoto = curPhoto.next();
  
  if(nxtPhoto.length == 0){
    nxtPhoto = $("#photoShow div:first"); 
  }
  
  curPhoto.removeClass("current").addClass("previous");
  nxtPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000,
                                                           
  function(){
    curPhoto.removeClass("previous");
  });
}

/*custom slider fade slider on prev and next click*/
    function moveLeft() {
     var isFunctionCalled = false;
      if(isFunctionCalled == false)
       {
               if($(".info-wheel .info").hasClass("active")){
                  var index = $('.info-wheel .info.active').index();
                  indx= index - 1;
                  //alert(index);
                  //alert(indx);
                    if(indx == $(".info-wheel .info").first().index() - 1)
                   {
                      
                      $('a.control_prev').addClass('disable');
                      return false; 
                   }
                   $('a.control_prev').removeClass('disable');
                    $('a.control_next').removeClass('disable')
                   $(".info-wheel .info").eq(indx).addClass('active');
                   $(".circle li").eq(indx).addClass('active');
                   $(".circle li").not(':eq(' + indx + ')').removeClass('active');
                   $(".info-wheel .info").not(':eq(' + indx + ')').removeClass('active');
                }
          isFunctionCalled = true;    
      }
         
    };

    function moveRight() {
       var isFunctionCalled = false;
      if(isFunctionCalled == false)
       {
               if($(".info-wheel .info").hasClass("active")){
                  var index = $('.info-wheel .info.active').index();
                  indx= index + 1;
                  //alert(index);
                  //alert(indx);
                   if(indx == $(".info-wheel .info").last().index() + 1)
                   {
                      
                      $('a.control_next').addClass('disable');
                      return false; 
                   }
                   $('a.control_prev').removeClass('disable');
                    $('a.control_next').removeClass('disable')
                   $(".info-wheel .info").eq(indx).addClass('active');
                   $(".info-wheel .info").not(':eq(' + indx + ')').removeClass('active');
                   $(".circle li").eq(indx).addClass('active');
                   $(".circle li").not(':eq(' + indx + ')').removeClass('active');
                }
          isFunctionCalled = true;    
      }
    };

    $('a.control_prev').click(function () {
        event.preventDefault();
        event.stopPropagation();
        moveLeft();
    });

    $('a.control_next').click(function () {
      event.preventDefault();
        event.stopPropagation();
        moveRight();
    });


/*expand the list*/
jQuery(document).ready(function () {
    jQuery('ul.expand').each(function(){
      if(jQuery(this).children('li').length){
        jQuery(this).children('li:lt(5)').show();
        jQuery(this).append('<button class="loadMore btn">LoadMore</button>');
      }
    });   
    jQuery('.loadMore').click(function () {
        jQuery(this).parent('ul.expand').children('li:gt(5)').show(); // use gt instead of lt
    });
});
jQuery(document).ready(function () {
    jQuery('ul.expand').each(function(){
      if(jQuery(this).children('li').length>5){
        jQuery(this).children('li:lt(5)').show();
        jQuery(this).append('<button class="loadMore">LoadMore</button>');
      }
    });   
    jQuery('ul.expand').on("click",'.loadMore',function (){
        jQuery(this).parent('.expand').children('li:gt(4)').show(); // use gt instead of lt
        jQuery(this).removeClass('loadMore').addClass('loadLess').text('LoadLess'); 
    });
    jQuery('ul.expand').on("click",'.loadLess',function () {
        jQuery(this).parent('.expand').children('li:gt(4)').hide(); // use gt instead of lt
        jQuery(this).removeClass('loadLess').addClass('loadMore').text('LoadMore'); 
    });
});




$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

/*$('.to-top').on('click',function(event)
{
   var target = $(this).attr('id');
   alert(target);
   $('html, body').stop().animate({
        scrollTop: target.offset().top
    }, 2000);
});*/


 $(".nav_five_steps a").hover(function() {
        var n = $(this).closest("li").index();
        $(this).closest("ul").addClass("step" + (n + 1))
    }, function() {
        var n = $(this).closest("li").index();
        $(this).closest("ul").removeClass("step" + (n + 1))
    });








});