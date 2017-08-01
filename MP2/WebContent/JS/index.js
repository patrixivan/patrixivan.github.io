	
	window.onload = function() {
		var clickable = document.getElementById('toggleProfile');
		clickable.addEventListener('click', handler);
	}
	
	document.getElementById('toggleProfile').addEventListener('click', 
		function () { [].map.call(document.querySelectorAll('.profile'), 
									function(el) { 
										el.classList.toggle('profile--open');
									});
		});