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

   /*$('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        autoplay:true,
        dots:false,
        autoplayTimeout:8000
    });*/

    // Shuffle js filter and masonry
    /*var Shuffle = window.Shuffle;
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
    });*/
    

    /*$('.portfolio-gallery').each(function () {
        $(this).find('.popup-gallery').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });*/

    $(document).ready(function() {
        /*var Shuffle = window.Shuffle;
        var element = document.querySelector('.shuffle-wrapper');

        var shuffleInstance = new Shuffle(element, {
            itemSelector: '.shuffle-item',
            sizer: element.querySelector('.grid-item-container')
          });
          */

        // Initialize Masonry
        var $gridContainers = $('.grid-item-container').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-item'
        });

      // Adjust height dynamically based on content
      $('.grid-item').hover(
        function() {
          var content = $(this).find('.content');
          content.css({
            'height': content.find('.content-inner').prop('scrollHeight') + 'px',
            'opacity': 1
          });

          // Trigger Masonry layout update
          $gridContainers.masonry('layout');
        },
        function() {
          var content = $(this).find('.content');
          content.css({
            'height': '0',
            'opacity': 0
          });

          // Trigger Masonry layout update
          $gridContainers.masonry('layout');
        }
      );

      // Handle filter change
      $('input[name="shuffle-filter"]').on('change', function(evt) {
        /*var input = evt.currentTarget;
        if (input.checked) {
            shuffleInstance.filter(input.value);
        }*/
        var filterValue = this.value;
        $('.grid-item').each(function() {
            var filter = $(this).data('groups');
            if(filter && !filter.includes(filterValue)){
                $(this).addClass('item-hidden');
            } else {
                $(this).removeClass('item-hidden');
            }
        });
        /*var filterValue = this.value;
        if (filterValue === 'all') {
          shuffleInstance.filter(Shuffle.ALL_ITEMS);
        } else {
          shuffleInstance.filter(function(element) {
            var test = $(element).data('groups');
            return  test.includes(filterValue);
          });
        }*/

        // Update Masonry layout after filtering
        $gridContainers.each(function() {
          $(this).masonry();
        });
        //$gridContainers.masonry('layout');
      });
        
    });

})(jQuery);

  