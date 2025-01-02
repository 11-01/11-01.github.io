window.onload = function() {
	function photo() {
		//定义滚动速度
		var speed = 50;
		//获取<div id="content_b">元素
		var content_b = document.getElementById("content_b");
		//复制一个<span>，用于无缝滚动
		content_b.innerHTML += content_b.innerHTML;
		//获取两个<span>元素
		var span = content_b.getElementsByTagName("span");
		//启动定时器，调用滚动函数
		var timer1 = window.setInterval(marquee, speed);
		//鼠标移入时暂停滚动，移出时继续滚动
		content_b.onmouseover = function() {
			clearInterval(timer1);
		}
		content_b.onmouseout = function() {
			timer1 = setInterval(marquee, speed);
		};
		//滚动函数
		function marquee() {
			//当第1个<span>被完全卷出时
			if (content_b.scrollLeft > span[0].offsetWidth) {
				//将被卷起的内容归0
				content_b.scrollLeft = 0;
			} else {
				//否则向左滚动
				++content_b.scrollLeft;
			}
		}
	}
	photo();
}
