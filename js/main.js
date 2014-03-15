/* global jQuery:false */
(function( $ ) {
    'use strict';
    $(function() {
        $('ul.nav').on( 'click', 'li a', function( ev ) {
            $('.navbar-collapse').collapse('hide');

            // Animate the scroll
            $.scrollTo( ev.target.hash, 250 );
        });

        $('a.navbar-brand').on( 'click', function() {
            // Animate the scroll
            $('html, body').animate({ scrollTop: 0 }, 250);
        });

        $('#toggle-theme').on( 'click', function() {
            $('.navbar-collapse').collapse('hide');

            var $body = $('body');
            if ( $body.hasClass('dark') ) {
                $body.removeClass('dark');
            } else {
                $body.addClass('dark');
            }
        });
    });
}).call( this, jQuery );
