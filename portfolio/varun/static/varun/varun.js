
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
	scroller=setTimeout(function(){
			toTop();
	},1);

		 marginY = marginY - speed;

		 if(marginY <= 0){
			 clearTimeout(scroller);
		 }

		 window.scroll(0,marginY);
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
