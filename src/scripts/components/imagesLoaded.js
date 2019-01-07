import $ from "jquery";
import imagesLoaded from 'imagesloaded';

const ImagesLoaded = {

    init(className) {

		$(className).each(function() {

			const self = this;

			imagesLoaded(className, () => {
				$(self).addClass('is-loaded');
			})
        })
    }
};

export default ImagesLoaded;
