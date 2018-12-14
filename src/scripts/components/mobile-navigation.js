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
		    menuOpen = false,
		    $wrapper = $( options.wrapperSelector ),
		    $menuButton = $( options.menuButtonSelector);

	const closeNav = () => {
			$wrapper.removeClass( options.offCanvasOpenClass );
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
				$wrapper.addClass( options.offCanvasOpenClass );
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
