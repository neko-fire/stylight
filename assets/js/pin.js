/**
 * JS for Stylight task
 *
 * @author Martin Bayer
 * @date 09 August 2015
 */
(function () {
    'use strict';

    window.pinapp = {
        items: $('.pin-item'),
        contentWidth: $('.content').innerWidth(),
        chunks: [],
        gap: 12,

        // calc how many items fit in content width
        createGrid: function () {
            var columns = Math.floor(this.contentWidth / (this.items.outerWidth() + this.gap));

            for (var i = 0; i < columns; i++) {
                this.chunks.push(this.gap);
            }

            this.setItemPosition();
        },

        setItemPosition: function () {
            var $this = this;

            this.items.each(function () {

                var min = Array.min($this.chunks),
                    index = $.inArray(min, $this.chunks),
                    leftPos = $this.gap + (index * ($this.items.outerWidth() + $this.gap));

                // position items
                $(this).css({
                    'left': leftPos + 'px',
                    'top': min + 'px'
                });

                // update height of current item for next iteration
                $this.chunks[index] = min + $(this).outerHeight() + $this.gap;
            });
        },

        init: function () {
            this.createGrid();
        }
    };

    // Helper since there is no framework like _underscore
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };


    pinapp.init();
})();