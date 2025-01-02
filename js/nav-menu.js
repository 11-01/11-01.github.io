window.onload = function() {
	var btn = document.querySelectorAll('btn');
	var ul = document.getElementsByClassName('dis');
	for (var i = 0; i < btn.length; i++) {
		btn[i].addEventListener("mouseover", function() {
				console.log(this.children[1])
			this.children[1].style.display = 'block';
		});
		btn[i].onmouseout = function() {
			this.children[1].style.display = 'none';
		}
	}
}

