/**
 * WEBSITE: https://themefisher.com
 * TWITTER: https://twitter.com/themefisher
 * FACEBOOK: https://www.facebook.com/themefisher
 * GITHUB: https://github.com/themefisher/
 */



(function ($) {
    'use strict';
    
AOS.init({
    once: true
});

    // ----------------------- 
        // Progress Bar--------------------
        // 
        // 

    $(window).on ('load', function (){ 
          
        $('.progress-bar').each(function(){
                var width = $(this).data('percent');
                $(this).css({'transition': 'width 3s'});
                $(this).appear(function() {
                    console.log('hello');
                    $(this).css('width', width + '%');
                    $(this).find('.count').countTo({
                        from: 0,
                        to: width,
                        speed: 3000,
                        refreshInterval: 50
                    });
                });
            });
        }); 

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:8000
    });

    // Shuffle js filter and masonry
    var Shuffle = window.Shuffle;
    var jQuery = window.jQuery;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1,
        group: 'project'
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
        var input = evt.currentTarget;
        if (input.checked) {
            myShuffle.filter(input.value);
        }
    });

    $('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    $('.inner-box').each(function () {
        var hoverContent = $(this).find('.show-on-hover');
        $(this).addEventListener('mouseenter', function() {
            // Set max-height dynamically to the scrollHeight to ensure it fits content
            hoverContent.style.maxHeight = hoverContent.scrollHeight + 'px';
          });
      
          $(this).addEventListener('mouseleave', function() {
            // Reset max-height to 0 when not hovered
            hoverContent.style.maxHeight = '0';
          });
    });


})(jQuery);

  