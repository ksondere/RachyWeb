//JSHint Validated Custom JS Code by Designova

/*global $:false */
/*global window: false */

(function(){
  "use strict";

//TWITTER INIT (Updated with compatibility on Twitter's new API):
//PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
$(function ($) {
    $('#ticker').tweet({
        modpath: './twitter/',
        count: 5,
        loading_text: 'loading twitter feed flame...',
        username:'designovastudio'
        /* etc... */
    });
  }); 


//VIEWPORT DETECTION:
$(function ($) {
    var viewportHeight = $(window).height();
    $('.intro').css('height',viewportHeight);
    $('.intro').css('padding-top',viewportHeight/3);
});


//MASONRY PORTFOLIO INIT:
$(function () {

   
});


$('#nav, #mobile-nav').localScroll(800);
    

    //===============
    //PARALLAX SETUP:
    //===============

    //.parallax(xPosition, speedFactor, outerHeight) options:
    //xPosition - Horizontal position of the element
    //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
    //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
    
    $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('.bg').parallax("50%", 0.4);
    $('#third').parallax("50%", 0.3);
    $('#fourth').parallax("50%", 3);
    $('#fifth').parallax("50%", 0.2);

    
    
    $('.page-layout').mouseenter(function(e) {
        var pageIndex = $(this).find('.outer-wrap').attr('id');
        
        $('#main-nav li a').css('border-bottom','solid 4px #000000');
        $('#main-nav li a').stop().animate({fontSize:'18px'},'slow');
        $('#main-nav li a').css('line-height','28px');
        $('#trigger-'+pageIndex).css('border-bottom','solid 4px #4AB7E4');
        $('#trigger-'+pageIndex).css('line-height','52px').stop().animate({fontSize:'32px'},'slow',function(){
            $('#main-nav').stop().animate({right:'-170px'},2000,function(){
                $('#main-nav li a').stop().animate({opacity:'0'},function(){
                    $('#nav-arrow').fadeIn();
                    });
                });
            });
    });
    
    
    
    $('#main-nav li a').click(function(e) {
        $('#main-nav li a').css('border-bottom','solid 4px #000000');
        $('#main-nav li a').stop().animate({fontSize:'18px'},'slow');
        $('#main-nav li a').css('line-height','28px');
        $(this).css('border-bottom','solid 4px #4AB7E4');
        $(this).css('line-height','52px').stop().animate({fontSize:'32px'},'slow',function(){
            $('#main-nav').stop().animate({right:'-170px'},2000,function(){
                $('#main-nav li a').stop().animate({opacity:'0'},function(){
                    $('#nav-arrow').fadeIn();
                    });
                });
            });
    });
    
    $('#nav-arrow, #main-nav').mouseenter(function(e) {
        $('#nav-arrow').fadeOut();
        $('#main-nav li a').stop().animate({opacity:'1'},function(){
            $('#main-nav').stop().animate({right:'0px'},100,'easeInOutExpo');
            });
    });
    
    $('.mob-nav-link').click(function(e) {
        $('.mob-nav-link').css('color','#000000');
        $(this).css('color','#4AB7E4');
    });
    
    
    //Gallery Mouse Effects
    $('.item').mouseenter(function(e) {
        $(this).find('.overlay-block').fadeIn(1000,'swing');
        
    });
    
    $('.item').mouseleave(function(e) {
        $('.item').find('.overlay-block').fadeOut(100);
    });
    
    
    //JQUERY TRANSIT INTEGRATION
    //note: portfolio filter needs these functions to be called on filter.js also
    $('.item').mouseenter(function(e) {
        $(this).css('z-index','999999').stop().transition({ scale: 1.2 });
    });
    $('.item').mouseleave(function(e) {
        $('.item').css('z-index','100').stop().transition({ scale: 1.0 });
    });
    
    $('.icon-thumb-big').mouseenter(function(e) {
        $(this).stop().transition({ scale: 1.2 }).transition({
            rotateY: '360deg'
        },2000);
    });
    
    $('.icon-thumb-big').mouseleave(function(e) {
        $(this).stop().transition({ scale: 1.0 }).transition({
            rotateY: '0deg'
        },2000);
    });
    


})();