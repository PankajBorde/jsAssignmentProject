function displayNone(num){
	for(let i=1; i<=2; i++){
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
	if(	document.querySelector("#main-container-1").style.display == "grid"){
		document.querySelector("#main-container-1").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-1").style.display = "grid" ;
		displayNone(1) ;
	}
})

// container-2
document.querySelector("#head-container-2").addEventListener("click" , ()=>{
	if(	document.querySelector("#main-container-2").style.display == "grid"){
		document.querySelector("#main-container-2").style.display = "none" ;
	}
	else{
		document.querySelector("#main-container-2").style.display = "grid" ;
		displayNone(2) ;
	}
})

