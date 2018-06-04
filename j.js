window.onload=function ()
	{
	 var oDiv=document.getElementById('container');
	 var oUl=oDiv.getElementsByTagName('ul')[0];
	 var aLi=oUl.getElementsByTagName('li');
	 var speed=null;
	
	 function move(){
		
		if(oUl.offsetLeft<-oUl.offsetWidth/2)
		   {oUl.style.left='0'};
		oUl.style.left=oUl.offsetLeft-4+'px';
	                       };
	 oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	 oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	var timer=setInterval(move,30);
	    oDiv.onmouseover=function ()
	     {
		   clearInterval(timer);
	      };
	    oDiv.onmouseout=function ()
		 {
		  timer=setInterval(move,30);
	     }
	
	};