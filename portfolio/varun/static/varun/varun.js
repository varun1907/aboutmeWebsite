
var marginY=0;
var destination=0;
var speed=8;
var scroller=null;



var scrollY=0;
var distance=40;
var s=24;
function autoScrollTo(elementId){

		var currentY=window.pageYOffset;
		var targetY=document.getElementById(elementId).offsetTop;
		var bodyHeight=document.body.offsetHeight;
		var yPos=currentY + window.innerHeight;

		var animator=setTimeout('autoScrollTo(\''+elementId+'\')',s);
		 if(yPos > bodyHeight)
		 {
			 clearTimeout(animator);
		 }
		 else {
		 	    if(currentY < targetY-distance){
						scrollY = currentY + distance;
						window.scroll(0,scrollY);
					}else {
						clearTimeout(animator);
					}
			}
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

	var currentY=window.pageYOffset;
	var targetY=document.getElementById(elementId).offsetTop;
	var bodyHeight=document.body.offsetHeight;
	var yPos=currentY + window.innerHeight;

	var animator=setTimeout('autoScrollTo(\''+elementId+'\')',s);
	 if(yPos > bodyHeight)
	 {
		 clearTimeout(animator);
	 }
	 else {
				if(currentY < targetY-distance){
					scrollY = currentY + distance;
					window.scroll(0,scrollY);
				}else {
					clearTimeout(animator);
				}
		}
	 }
