/**
 * Cart Drawer Scripts
 * ------------------------------------------------------------------------------
 * A file that contains scripts for the off-canvas cart drawer feature.
 *
 */

import $ from 'jquery';

$.fn.responsiveNav = function( options ) {

	options = $.extend({}, {
		    wrapperSelector:        '.js-page__outer',
		    menuButtonSelector:     '.js-menu__toggle',
		    menuOpenClass:          ' js-menu__toggle--menu-open'
	}, 		options);

	let $this = $(this),
		    menuOpen = false,
		    $wrapper = $( options.wrapperSelector ),
		    $menuButton = $( options.menuButtonSelector);

	const closeNav = () => {
			$wrapper.removeClass( options.menuOpenClass );
		    $menuButton.removeClass( options.menuOpenClass );
		    menuOpen = false;
	};

	const bodyClickFn = (event) => {
        if( !$this.is(event.target) && $this.has(event.target).length === 0 ) {
            closeNav();
            $wrapper.unbind( 'touchstart, click', bodyClickFn );
        }
	};

	const menuBtnFn = () => {

			$menuButton.bind( 'touchstart, click', function(event) {
			event.stopPropagation();
			event.preventDefault();

			if ( menuOpen ) {
				closeNav();
			} else {
				$wrapper.addClass( options.menuOpenClass );
				$menuButton.addClass( options.menuOpenClass );
				$wrapper.bind( 'touchstart, click', bodyClickFn );
				menuOpen = true;
			}
		});
	};

  menuBtnFn();

	return this;
};


// Make navigation responsive
$('.js-navigation').responsiveNav();
