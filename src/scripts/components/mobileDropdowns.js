/**
 * Mobile dropdowns
 * ------------------------------------------------------------------------------
 * A file that contains scripts for the mobile dropdown feature.
 *
 */

const MobileDropdowns = {

    init(triggerElement) {
      const triggerEl = document.querySelectorAll(triggerElement);
      
      triggerEl.forEach((el) => {
        const targetEl  = el.parentElement.lastElementChild;
        const toggleEls = [el, targetEl]
 
        el.addEventListener('click', e => {
          e.preventDefault();
          toggleElements(...toggleEls);
        })
      })

      function toggleElements(...elements) {
        const elementsToToggle = [...elements];
        elementsToToggle.forEach(elementToToggle => elementToToggle.classList.toggle('active'));
      }
    }
}

export default MobileDropdowns;
