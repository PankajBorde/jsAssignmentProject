const hoverMeBtn = document.getElementById("hoverMeBtn") ;
let count = 0 ;
// hoverMeBtn.style.transform = "translate(-112% , -191%)" ;
// mouseover event 
hoverMeBtn.addEventListener("mouseover", ()=>{
	if(count == 0){
		count = 1 ;
		hoverMeBtn.style.transform = "translate(-112% , -191%)" ;
	}
	else if(count == 1){
		count = 2 ;
		hoverMeBtn.style.transform = "translate(112% , -191%)" ;
	}
	else if(count == 2){
		count = 3 ;
		hoverMeBtn.style.transform = "translate(112% , 191%)" ;
	}
	else if(count == 3){
		count = 4 ;
		hoverMeBtn.style.transform = "translate(-112% , 191%)" ;
	}
	else if(count == 4){
		count = 1 ;
		hoverMeBtn.style.transform = "translate(-112% , -191%)" ;
	}
	
})
/* transform: translateX(-112%);  */
/* transform: translateY(-191%); */
// Count = 0 -> center
// Count = 1 -> top-left
// Count = 2 -> top-right
// Count = 3 -> bottom-right
// Count = 4 -> bottom-left