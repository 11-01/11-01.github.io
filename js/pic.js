window.onload = function() {
function picChange() {
	var current_index = 0;
	var timer = window.setInterval(autoChange, 1500);
	var button_li = document.getElementById("button").getElementsByTagName("li");
	var pic_li = document.getElementById("banner_pic").getElementsByTagName("li");
	for (var i = 0; i < button_li.length; i++) {
		button_li[i].onmouseover = function() {
			if (timer) {clearInterval(timer);}
			for (var a = 0; a < pic_li.length; a++) {
				if (button_li[a] == this) {
					current_index = a;
					button_li[a].className = "current";
					pic_li[a].className = "current";
				} else {
					pic_li[a].className = "li";
					button_li[a].className = "but";}}}
		button_li[i].onmouseout = function() {timer = setInterval(autoChange, 1500);}}
	function autoChange() {
		++current_index;
		if (current_index == button_li.length) {current_index = 0;}
		for (var i = 0; i < button_li.length; i++) {
			if (i == current_index) {
				button_li[i].className = "current";
				pic_li[i].className = "current";
			} else {
				button_li[i].className = "but";
				pic_li[i].className = "li";}}}}
picChange();

	function photo() {
		var speed = 50;
		var content_b = document.getElementById("content_b");
		content_b.innerHTML += content_b.innerHTML;
		var span = content_b.getElementsByTagName("span");
		var timer1 = window.setInterval(marquee, speed);
		content_b.onmouseover = function() {clearInterval(timer1);}
		content_b.onmouseout = function() {timer1 = setInterval(marquee, speed);};
		function marquee() {
			if (content_b.scrollLeft > span[0].offsetWidth) {
				content_b.scrollLeft = 0;
			} else {
				++content_b.scrollLeft;}}}
	photo();}
