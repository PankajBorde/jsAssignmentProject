// container-1
document.querySelector("#head-container-1").addEventListener("click" , ()=>{
	if(	document.querySelector("#main-container-1").style.display == "grid"){
		document.querySelector("#main-container-1").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-1").style.display = "grid" ;
	}
})

// container-2
document.querySelector("#head-container-2").addEventListener("click" , ()=>{
	if(	document.querySelector("#main-container-2").style.display == "grid"){
		document.querySelector("#main-container-2").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-2").style.display = "grid" ;
	}
})

