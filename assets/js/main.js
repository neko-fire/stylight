/**
 * JS for Stylight task
 *
 * @author Martin Bayer
 * @date 07 August 2015
 */
(function(){
    var nav = $('nav'),
        content = $('.content'),
        sub = $('.js-sub');

    // mobile navigation
    $('.mobile-nav').on('click', function() {

        if(!nav.hasClass('js-drawer-open')){
            nav.addClass('js-drawer-open');
            content.addClass('js-moved');

        } else {
            nav.removeClass('js-drawer-open');
            content.removeClass('js-moved');
        }
    });

    // sub navigation
    if($('.mobile-nav:visible')){
        sub.on('click', function(){
            sub.find('ul:visible').slideUp('fast');
            $(this).find('ul').slideDown('fast');
        });
    }
})();