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

document.getElementById('open-modal-box').addEventListener('click',function() {
	window.open('./text/photo_1.html');
})