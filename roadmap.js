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

document.getElementById('open-modal-box3').addEventListener('click',function() {
	window.location.href='./text/photo_3.html';
})

document.getElementById('open-modal-box4').addEventListener('click',function() {
	window.location.href='./text/photo_4.html';
})

document.getElementById('open-modal-box5').addEventListener('click',function() {
	window.location.href='./text/photo_5.html';
})
/*
let link = document.querySelector('link[rel=import]');
let content = link.import.querySelector('#photo_1-dm');
document.body.appendChild(content.cloneNode(true));
*/