/**
 * Cart Drawer Scripts
 * ------------------------------------------------------------------------------
 * A file that contains scripts for the off-canvas cart drawer feature.
 *
 */

const CartDrawer = {

    init(triggerEl, targetEl) {

      // Trigger and Target
      const trigEl  = document.querySelector(triggerEl),
            targEl  = document.querySelector(targetEl),
            main    = document.querySelector('.site-main');

      const closingElements = [trigEl, main],
            toggleElements  = [targEl, main];

      // Add click listener for Trigger and Body (outside of canvas drawer)
      trigEl.addEventListener('click', e => {
        e.preventDefault();
        e.stopImmediatePropagation();
        openElements(...toggleElements);
      });

      // 
      closingElements.forEach(closingElem => {
        closingElem.addEventListener('click', e => {
          e.preventDefault();

          if ( main.classList.contains('drawer-open') && !(e.target).classList.contains('drawer-open') ) {
            closeElements(...toggleElements);
          }
        })
      });

      function openElements(...elements) {
        const elementsToOpen = [...elements];
        elementsToOpen.forEach(elementToOpen => elementToOpen.classList.toggle('drawer-open'));
      }

      function closeElements(...elements) {
        const elementsToClose = [...elements];
        elementsToClose.forEach(elementToClose => elementToClose.classList.remove('drawer-open'));
      }
    }
};

export default CartDrawer;