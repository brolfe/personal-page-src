/* global jQuery:false */
(function( $ ) {
    'use strict';
    $(function() {
        $('ul.nav').on( 'click', 'li a', function( ev ) {
            // Toggle the active class
            $('ul.nav li').removeClass('active');
            $( ev.target ).closest('li').addClass('active');

            // Animate the scroll
            $.scrollTo( ev.target.hash, 250 );
        });

        $('a.navbar-brand').on( 'click', function() {
            // strip active class from nav bar
            $('ul.nav li').removeClass('active');
            // Animate the scroll
            $('html, body').animate({ scrollTop: 0 }, 250);
        });
    });
}).call( this, jQuery );
