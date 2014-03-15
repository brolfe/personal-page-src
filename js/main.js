/* global jQuery:false */
(function( $ ) {
    'use strict';
    $(function() {
        $('ul.nav').on( 'click', 'li a', function( ev ) {
            // Animate the scroll
            $.scrollTo( ev.target.hash, 250 );

            $('.navbar-collapse').collapse('hide');
        });

        $('a.navbar-brand').on( 'click', function() {
            // Animate the scroll
            $('html, body').animate({ scrollTop: 0 }, 250);
        });

        $('#toggle-theme').on( 'click', function() {
            var $body = $('body');
            if ( $body.hasClass('dark') ) {
                $body.removeClass('dark');
            } else {
                $body.addClass('dark');
            }
            $('.navbar-collapse').collapse('hide');
        });
    });
}).call( this, jQuery );
