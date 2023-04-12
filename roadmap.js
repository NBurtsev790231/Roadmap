'use strict'
window.onload = function() {
	setTimeout(function() {
		document.body.classList.add('loaded')

		if (window.matchMedia('(min-width: 992px)').matches) {

			Draggable.create('.gallery', {
				bounds: 'body',
				inertia: true
			})
		}
	}, 200)
}

function open_photo_1() {
	photo__item= window.open('./text/photo_1.html');
}
