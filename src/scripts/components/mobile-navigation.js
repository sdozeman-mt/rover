/**
 * Mobile Navigation Scripts
 * ------------------------------------------------------------------------------
 * A file that contains scripts for the mobile navigation.
 *
 */

import $ from 'jquery';

$.fn.responsiveNav = function( options ) {

	options = $.extend({}, {
		    wrapperSelector:        '.js-page__outer',
		    menuButtonSelector:     '.js-menu__toggle',
			menuOpenClass:          ' js-menu__toggle--open',
			offCanvasOpenClass:		' js-off-canvas__toggle--open'
	}, 		options);

	let $this = $(this),
			menuOpen 	= false,
			$body 		= $('body'),
		    $wrapper 	= $( options.wrapperSelector ),
		    $menuButton = $( options.menuButtonSelector);

	const closeNav = () => {
			$body.removeClass (options.menuOpenClass );
			$menuButton.removeClass( options.menuOpenClass );
			$wrapper.removeClass( options.offCanvasOpenClass );
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
				$body.addClass (options.menuOpenClass );
				$menuButton.addClass( options.menuOpenClass );
				$wrapper.addClass( options.offCanvasOpenClass );
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
