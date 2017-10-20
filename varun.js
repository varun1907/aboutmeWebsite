// function doFirst()
// {

// 	var x= document.getElementById('header');
// 	x.addEventListener('mouseover',function(){
// 			x.style.visibility='hidden';
// 		});
// 		x.addEventListener('mouseout',function(){
// 			x.style.visibility='visible';
// 		});
// }	
// window.addEventListener('load',doFirst,false);
function doFirst()
{
	var ul=document.getElementById('foo');
	var x=ul.getElementsByTagName('li');
	x[0].addEventListener('mouseover',function(){
				x[0].style.backgroundColor='black';
		      });
	x[0].addEventListener('mouseout',function(){
				x[0].style.backgroundColor='#6D695E';
		      });

	x[1].addEventListener('mouseover',function(){
				x[1].style.backgroundColor='black';
		      });
	x[1].addEventListener('mouseout',function(){
				x[1].style.backgroundColor='#6D695E';
		      });
	
		x[2].addEventListener('mouseover',function(){
				x[2].style.backgroundColor='black';
		      });
	x[2].addEventListener('mouseout',function(){
				x[2].style.backgroundColor='#6D695E';
		      });
	
		x[3].addEventListener('mouseover',function(){
				x[3].style.backgroundColor='black';
		      });
	x[3].addEventListener('mouseout',function(){
				x[3].style.backgroundColor='#6D695E';
		      });
		
}
window.addEventListener('load',doFirst,false);