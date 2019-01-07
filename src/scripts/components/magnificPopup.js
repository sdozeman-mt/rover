/**
 * MAgnific Popup
 * ------------------------------------------------------------------------------
 * A file that contains scripts for Magnific Popup
 *
 */

import $ from 'jquery';
import 'magnific-popup';

$('.js-search__toggle').magnificPopup({
    type: 'inline',
    preloader: false,
    mainClass: 'mfp-fade mfp-centered',
    removalDelay: 300
});