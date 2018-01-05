window.onload = function(){
	var liNodes = document.getElementById("手机");
	var thisNode = document.getElementById("children");
	liNodes.onmouseover = function(){
		thisNode.style.display = "block";
	}
	liNodes.onmouseout = function(){
		thisNode.style.display = "none";
	}

	var liNodes2 = document.getElementById("笔记本");
	var thisNode2 = document.getElementById("children2");
	liNodes2.onmouseover = function(){
		thisNode2.style.display = "block";
	}
	liNodes2.onmouseout = function(){
		thisNode2.style.display = "none";
	}

	var liNodes3 = document.getElementById("电视");
	var thisNode3 = document.getElementById("children3");
	liNodes3.onmouseover = function(){
		thisNode3.style.display = "block";
	}
	liNodes3.onmouseout = function(){
		thisNode3.style.display = "none";
	}

	var liNodes4 = document.getElementById("盒子");
	var thisNode4 = document.getElementById("children4");
	liNodes4.onmouseover = function(){
		thisNode4.style.display = "block";
	}
	liNodes4.onmouseout = function(){
		thisNode4.style.display = "none";
	}


	/*滚动*/
	var speed = 10; //设置图片滑动速度为10毫秒
	picScroll = document.getElementById("picScroll");//获取最外面的容器
	picScroll1 = document.getElementById("picScroll1");//获取存放内容的容器
	picscroll2 = document.getElementById("picScroll2");//获取临时存放内容的容器

	picscroll2.innerHTML = picScroll1.innerHTML;//将容器的内容填到容器2

	var ID=setInterval(changeToLeft,speed);//每speed毫秒，向左挪动一下

	//2、鼠标经过时暂停图片滚动
	picScroll.onmouseover=function() {
		clearInterval(ID);
	}
	//3、鼠标离开后图片继续滚动
	picScroll.onmouseout=function() {
		ID=setInterval(changeToLeft,speed);
	}
}
function changeToLeft(){
	
	if(picScroll.scrollLeft >= (picScroll1.offsetWidth)){
		picScroll.scrollLeft = 0;
	}
	else{
		picScroll.scrollLeft += 1;
	}
}
