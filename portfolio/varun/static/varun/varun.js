
var marginY=0;
var destination=0;
var speed=8;
var scroller=null;

function initScroll(elementId){
	 destination=document.getElementById(elementId).offsetTop;
		 scroller=setTimeout(function(){
		 initScroll(elementId)
	 },1);
	 marginY = marginY + speed;

	 if(marginY >= destination){
		 clearTimeout(scroller);
	 }
	 window.scroll(0,marginY);

}

function toTop(){

	var x=window.pageYOffset
	scroller=setTimeout(function(){
			toTop();
	},1);

		 x = x - speed;

		 if(x <= 0){
			 clearTimeout(scroller);
		 }

		 window.scroll(0,x);
}
function scrollWin()
{
	scroller=setTimeout(function(){
			scrollWin();
	},1);

	marginY = marginY + speed;

	if(marginY >= screen.height){
		clearTimeout(scroller);
	}

	window.scroll(0,marginY);

}
