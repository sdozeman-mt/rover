import imagesLoaded from 'imagesloaded';

const ImagesLoaded = {

    init(className) {

		const els = document.querySelectorAll(className);

		[...els].forEach((el) => {
			imagesLoaded(className, () => {
				el.classList.add('is-loaded');
			});
        });
    }
};

export default ImagesLoaded;
