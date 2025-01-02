window.onload = function() {
	var videos = document.getElementsByTagName("video");
	for (var i = 0; i < videos.length; i++) {
		var video = videos[i];
		video.addEventListener('click', function() {
			this.play();
		});
		video.addEventListener('mouseout', function() {
			this.pause();
		});}}

// video.addEventListener("mouseover", function() {
		// 	this.play();
		// });
		// video.addEventListener("mouseout", function() {
		// 	this.pause();
		// });