/*
 * Dinner Menu is our mobile navigation toggle
 *
 */
import $ from "jquery";

$.fn.extend({

    dinnerMenu(options) {
        const config = {
            btn         : this,
            target      : $(this.attr('data-target')),
            activeClass : 'dinner-menu-active',
            transClass  : ' dinner-menu-transitioning',
            header      : $('.js-dinner-menu-header'),
            parentEL    : $('body')
        };

        if (!config.target.length || !config.header.length) {
            return;
        } else {
            config.targetInner = config.target.children().wrapAll('<div class="dinner-menu__inner" />').parent();
        }

        const IS_FIXED = window.getComputedStyle(config.header[0]).position === 'fixed';
        let isOpen  = false;

        if (IS_FIXED) {
            config.activeClass += ' dinner-menu-active--fixed';
        } else {
            config.activeClass += ' dinner-menu-active--relative';
        }

        function open(){
            config.btn.addClass(config.activeClass);
            config.parentEL.addClass( config.activeClass + config.transClass );
            config.target[0].scrollTop = 0;
            isOpen = true;
        }

        function close(){
            config.parentEL.addClass( config.transClass );
            config.btn.removeClass(config.activeClass);
            config.parentEL.removeClass(config.activeClass);
            isOpen = false;
        }

        config.target.on('webkitTransitionEnd transitionend oTransitionEnd', e => {
            config.parentEL.removeClass(config.transClass);
        });

        /*
         * Helper variable used to prevent
         * firing btn click event multiple times
         */
        let flag = false;

        config.btn.on('click touchstart', function(){

            if (!flag) {
                flag = true;
                setTimeout(() => { flag = false; }, 100);
                ($(this).hasClass(config.activeClass) ) ? close() : open();
            }

            return false;
        });
    }
});

const MobileNav = {

    init(className) {

        // uses the dinner manu custom plugin
        $(className).dinnerMenu();
    }
};

export default MobileNav;
