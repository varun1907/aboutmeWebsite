
function doFirst()
{
	var ul=document.getElementById('foo');
  li=ul.getElementsByTagName('li');
	var x=ul.getElementsByTagName('a');

	x[0].addEventListener('mouseover',function(){
				li[0].style.backgroundColor='black';
        x[0].style.textDecoration="none";
        x[0].style.color="white";

		      });
	x[0].addEventListener('mouseout',function(){
				li[0].style.backgroundColor='#6D695E';
		      });

	x[1].addEventListener('mouseover',function(){
				li[1].style.backgroundColor='black';
        x[1].style.textDecoration="none";
        x[1].style.color="white";

		      });
	x[1].addEventListener('mouseout',function(){
				li[1].style.backgroundColor='#6D695E';
		      });

		x[2].addEventListener('mouseover',function(){
				li[2].style.backgroundColor='black';
        x[2].style.textDecoration="none";
        x[2].style.color="white";

		      });
	x[2].addEventListener('mouseout',function(){
				li[2].style.backgroundColor='#6D695E';
		      });

		x[3].addEventListener('mouseover',function(){
				li[3].style.backgroundColor='black';
          x[3].style.textDecoration="none";
          x[3].style.color="white";

		      });
	x[3].addEventListener('mouseout',function(){
				li[3].style.backgroundColor='#6D695E';
      });

  x[4].addEventListener('mouseover',function(){
  			li[4].style.backgroundColor='black';
        x[4].style.textDecoration="none";
        x[4].style.color="white";
      });
	x[4].addEventListener('mouseout',function(){
			li[4].style.backgroundColor='#6D695E';
      });
}

window.addEventListener('load',doFirst,false);





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
