/**
 * JS for Stylight task
 *
 * @author Martin Bayer
 * @date 07 August 2015
 */
(function () {
    'use strict';

    // pin stuff
    var items = $('.pin-item'),
        contentWidth = $('.content').innerWidth(),
        chunks = [],
        gap = 20;

    // calc how many items fit in content width
    function getGridSize() {
        var columns = Math.floor(contentWidth / (items.outerWidth() + gap));

        

        console.log(columns);
    }


    getGridSize();


    /**
     * Small stuff
     */
    var nav = $('nav'),
        content = $('.content'),
        sub = $('.js-sub');

    // mobile navigation
    $('.mobile-nav').on('click', function () {

        if (!nav.hasClass('js-drawer-open')) {
            nav.addClass('js-drawer-open');
            content.addClass('js-moved');

        } else {
            nav.removeClass('js-drawer-open');
            content.removeClass('js-moved');
        }
    });

    // sub navigation
    if ($('.mobile-nav:visible')) {
        sub.on('click', function () {
            sub.find('ul:visible').slideUp('fast');
            $(this).find('ul').slideDown('fast');
        });
    }
})();