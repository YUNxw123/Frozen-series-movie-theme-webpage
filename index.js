window.onload=function(){
var btn=document.getElementById('btn');
var din=document.getElementById('din');
btn.onmouseover=function(){
	din.style.display='block';	
}  
btn.onmouseout=function(){
	din.style.display='none';	
}
var btm=document.getElementById('btm');
var dim=document.getElementById('dim');
btm.onmouseover=function(){
	dim.style.display='block';	
}  
btm.onmouseout=function(){
	dim.style.display='none';	
}
document.getElementById('start').onclick = function(){
		player.play();
}
document.getElementById('stop').onclick = function(){
		player.pause();
}
document.getElementById('anna').onclick = function(){
		annamusic.play();
}
document.getElementById('anna').ondblclick = function(){
		annamusic.pause();
}
document.getElementById('elsa').onclick = function(){
		elsamusic.play();
}
document.getElementById('elsa').ondblclick = function(){
		elsamusic.pause();
}
document.getElementById('olaf').onclick = function(){
		olafmusic.play();
}
document.getElementById('olaf').ondblclick = function(){
		olafmusic.pause();
}
var current_index=0;
//5000表示调用周期，以毫秒为单位，5000毫秒就是5秒
var timer=window.setInterval(autoChange, 5000);
//获取所有轮播按钮
var button_li=document.getElementById("button").getElementsByTagName("li");
//获取所有banner图
var pic_div=document.getElementById("banner_pic").getElementsByTagName("div");
//遍历元素
for(var i=0;i<button_li.length;i++){
	//添加鼠标滑过事件
	button_li[i].onmouseover=function(){
		//定时器存在时清除定时器
		if(timer){
			clearInterval(timer);
		}
		//遍历元素
		for(var j=0;j<pic_div.length;j++){
			//将当前索引对应的元素设为显示
			if(button_li[j]==this){
				current_index=j; //从当前索引位置开始
				button_li[j].className="current";
				pic_div[j].className="current";
			}
			else{
				//将所有元素改变样式
				pic_div[j].className="pic";
				button_li[j].className="but";
			}
		}
	}
	//鼠标移出事件
	button_li[i].onmouseout=function(){
		//启动定时器，恢复自动切换
		timer=setInterval(autoChange,5000);			
	}
}
function autoChange(){
	//自增索引
	++current_index;
	//当索引自增达到上限时，索引归0
	if (current_index==button_li.length) {
		current_index=0;
	}
	for(var i=0;i<button_li.length;i++){
		if(i==current_index){
			button_li[i].className="current";
			pic_div[i].className="current";
		}else{
			button_li[i].className="but";
			pic_div[i].className="pic";
		}
	}
	} 
}