import 'lazysizes/plugins/object-fit/ls.object-fit';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import 'lazysizes/plugins/rias/ls.rias';
import 'lazysizes/plugins/bgset/ls.bgset';
import 'lazysizes';
import 'lazysizes/plugins/respimg/ls.respimg';

import '../../styles/theme.scss';
import '../../styles/theme.scss.liquid';

import {focusHash, bindInPageLinks} from '@shopify/theme-a11y';
import {cookiesEnabled} from '@shopify/theme-cart';

import $ from 'jquery';

import '../components/magnificPopup.js';
import ImagesLoaded from '../components/imagesLoaded.js';
import MobileNav from '../components/mobileNavigation.js';
import MobileDropdowns from '../components/mobileDropdowns.js';
import CartDrawer from '../components/cartDrawer.js';

const Router = {
  common: {
    init() {
      // Common a11y fixes
      focusHash();
      bindInPageLinks();

      // Apply a specific class to the html element for browser support of cookies.
      if (cookiesEnabled()) {
        document.documentElement.className = document.documentElement.className.replace(
          'supports-no-cookies',
          'supports-cookies',
        );
      }
      ImagesLoaded.init('.js-loaded');
      MobileNav.init('.js-menu__toggle');
      MobileDropdowns.init('.js-dropper');
      CartDrawer.init('.js-cart__toggle', '.js-off-canvas');
    },
    finalize() {}
  },
  home: {}
};

export default Router;

/*
 * The routing fires all common scripts, followed by the page specific scripts.
 * Add additional events for more control over timing e.g. a finalize event
*/
const UTIL = {

  fire(func, funcname, args) {
      const namespace = Router;
      funcname = (funcname === undefined) ? 'init' : funcname;
      if (func !== '' && namespace[func] && typeof namespace[func][funcname] === 'function') {
          namespace[func][funcname](args);
      }
  },
  loadEvents() {
      UTIL.fire('common');

      $.each(document.body.className.replace(/-/g, '_').split(/\s+/), (i, classnm) => {
          UTIL.fire(classnm);
      });

  $.each(document.body.className.replace(/-/g, '_').split(/\s+/), function(i, classnm) {
    UTIL.fire(classnm);
  });

  UTIL.fire('common', 'finalize');
}
};

$(document).ready(UTIL.loadEvents);

