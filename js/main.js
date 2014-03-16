/* global jQuery:false */
(function( $ ) {
    'use strict';
    $(function() {
        // Set text so the evil spam robots dont find us
        // base64 encoded version of my email address
        var eaddr = atob('YnJ5YW50LnJvbGZlQGdtYWlsLmNvbQ==');
        var $a = $('<a>', {
            href: 'mailto:' + eaddr,
            text: eaddr
        });
        $('#eaddr').append( $a );

        // Nav bar stuff
        $('ul.nav').on( 'click', 'li a', function( ev ) {
            $('.navbar-collapse').collapse('hide');

            // Animate the scroll
            $.scrollTo( ev.target.hash, 250 );
        });

        $('a.navbar-brand').on( 'click', function() {
            // Animate the scroll
            $('html, body').animate({ scrollTop: 0 }, 250);
        });

        // Toggle solarized light and dark themes
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
