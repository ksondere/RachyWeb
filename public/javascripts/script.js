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

    var $container = $('#container');

    $container.isotope({
        itemSelector: '.element',
        layoutMode: 'masonry'
    });


    var $optionSets = $('#options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function () {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        var changeLayoutMode;
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options);
        } else {
            // creativewise, apply new options
            $container.isotope(options);
        }

        return false;
    });


});


/*===========================================================*/
/*  Colorbox
/*===========================================================*/
$(function () {
    
    // var viewportHeight = $(window).height();
    // var introMargin = (viewportHeight / 3) - (viewportHeight / 12);
    // $('#intro').height(viewportHeight);
    // $('.promo-one').css('margin-top', introMargin);
    //Examples of how to assign the ColorBox event to elements
    $(".zoom-info").colorbox({
        rel: 'group1',
        transition: "fade",
        speed: 1700,
        onComplete: function () {
            $('.flexslider').flexslider({
                animation: "slide",
                controlNav: false,
                directionNav: true

            });
        }
    });

});





    
    
    $('.page-layout').mouseenter(function(e) {
        var pageIndex = $(this).find('.outer-wrap').attr('id');
        
        $('#main-nav li a').css('border-bottom','solid 4px #000000');
        $('#main-nav li a').stop().animate({fontSize:'18px'},'slow');
        $('#main-nav li a').css('line-height','28px');
        $('#trigger-'+pageIndex).css('border-bottom','solid 4px #4AB7E4');
        $('#trigger-'+pageIndex).css('line-height','52px').stop().animate({fontSize:'32px'},'slow');
    });
    
    
    
    $('#main-nav li a').click(function(e) {
        $('#main-nav li a').css('border-bottom','solid 4px #000000');
        $('#main-nav li a').stop().animate({fontSize:'18px'},'slow');
        $('#main-nav li a').css('line-height','28px');
        $(this).css('border-bottom','solid 4px #4AB7E4');
        $(this).css('line-height','52px').stop().animate({fontSize:'32px'},'slow');
    });
    
    $('#nav-arrow, #main-nav').mouseenter(function(e) {
        $('#nav-arrow').fadeOut();
        $('#main-nav li a').stop().animate({opacity:'1'},function(){
            $('#main-nav').fadeIn();
            });
    });
    
    $('.mob-nav-link').click(function(e) {
        $('.mob-nav-link').css('color','#000000');
        $(this).css('color','#4AB7E4');
    });
    
    
   //Portfolio Hover
    $('.folio-item').mouseenter(function () {
        $(this).find('img').css('opacity', '0.2');
        $(this).find('.folio-trigger-icon').fadeIn();
        $(this).find('.titles').fadeIn();
    });

    $('.folio-item').mouseleave(function () {
        $('.folio-item').find('.titles').fadeOut();
        $(this).find('.folio-trigger-icon').fadeOut();
        $('.folio-item').find('img').css('opacity', '1');
    });
    
    //Revela Lightbox from ZURB Foundation (added on)
    $("#featured").orbit();
    
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