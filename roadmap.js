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
window.location.href = './text/photo_1.html';
})

document.getElementById('open-modal-box2').addEventListener('click', function() {
	window.location.href='./text/photo_2.html';
})


/*
let link = document.querySelector('link[rel=import]');
let content = link.import.querySelector('#photo_1-dm');
document.body.appendChild(content.cloneNode(true));
*/