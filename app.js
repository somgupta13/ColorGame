var colorSelection=document.querySelector("#rgb");
var buttonColor=document.querySelectorAll("#buttons6 button");
var easy=document.querySelector("#Easy");
var hard=document.querySelector("#hard");
var NewColor=document.querySelector("#NewColor");
var gamedecider=document.querySelector("#gamedecider");
var header=document.querySelector("#Header");
var a,b,c,d,resultColor,pickColor;
f1();
f2();
 console.log(d);
//EventHandlers

buttonColor.forEach(function(button,i){
			button.addEventListener("click",function(){
				pickColor=this.getAttribute("style");
			if(!pickColor.includes(resultColor)){
				this.style.backgroundColor="black";
					button.style.borderColor="black";
				button.style.outlineColor="black"
				
				gamedecider.textContent="Try Again";
			}
			if(pickColor.includes(resultColor)){
				gamedecider.textContent="Correct!";
				gamedecider.style.color="black";
				NewColor.innerHTML="<b>PLAY AGAIN?</b>";
				header.style.backgroundColor="rgb("+a+" ,"+b+" ,"+c+")";				
				buttonColor.forEach(function(b1){b1.style.backgroundColor="rgb("+a+" ,"+b+" ,"+c+")";});

			}
				easy.classList.add("s1");
				hard.classList.add("s1");
				easy.classList.remove("easy1");
				hard.classList.remove("hard1");
	});
		});
buttonColor.forEach(function(button,i){
			button.addEventListener("onmouseover",function(){
					button.style.borderColor="black";
					
			});
		});



easy.addEventListener("click",function(){
	easy.style.color="white";
	easy.style.backgroundColor="#3e3eb1e0";
	hard.style.color="#3e3eb1e0";
	hard.style.backgroundColor="white";
});

hard.addEventListener("click",function(){
	hard.style.color="white";
	hard.style.backgroundColor="#3e3eb1e0";
	easy.style.color="#3e3eb1e0"
	easy.style.backgroundColor="white";
});

NewColor.addEventListener("click touchstart",function(){
	NewColor.innerHTML="<b>New Color</b>";
	easy.classList.remove("s1");
				hard.classList.remove("s1");
				easy.classList.add("easy1");
				hard.classList.add("hard1");
				gamedecider.textContent=""
	header.style.backgroundColor="#3e3eb1e0";
	f1();
	f2();

});

//functions
function getRandomInt(num) {
  return Math.floor(Math.random() *Math.floor(num));
}

function f1(){
	 a=getRandomInt(256);
	 b=getRandomInt(256);
	 c=getRandomInt(256);
	 colorSelection.textContent="RGB("+a+", "+b+", "+c+")";
}

function f2(){
	d=getRandomInt(7);
	buttonColor[d].style.backgroundColor="rgb("+a+" , "+b+" , "+c+")";
	resultColor="background-color: rgb("+a+", "+b+", "+c+");";
	for(var i=0;i<buttonColor.length;i++){
		if(i!=d){
					buttonColor[i].style.backgroundColor="rgb("+getRandomInt(256)+" ,"+getRandomInt(256)+" ,"+getRandomInt(256)+")";
				}	

	}
}
