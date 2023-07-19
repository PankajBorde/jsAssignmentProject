function displayNone(num){
	for(i=1; i<=3; i++){
		if(i==num){
			continue ;
		}
		else{
			document.querySelector(`#main-container-${i}`).style.display = "none" ;
		}
	}
}

// container-1
document.querySelector("#head-container-1").addEventListener("click" , ()=>{
	displayNone(1) ;
	if(	document.querySelector("#main-container-1").style.display == "grid"){
		document.querySelector("#main-container-1").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-1").style.display = "grid" ;
	}
})

// container-2
document.querySelector("#head-container-2").addEventListener("click" , ()=>{
	displayNone(2) ;
	if(	document.querySelector("#main-container-2").style.display == "grid"){
		document.querySelector("#main-container-2").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-2").style.display = "grid" ;
	}
})

// container-3
document.querySelector("#head-container-3").addEventListener("click" , ()=>{
	displayNone(3) ;
	if(	document.querySelector("#main-container-3").style.display == "grid"){
		document.querySelector("#main-container-3").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-3").style.display = "grid" ;
	}
})

