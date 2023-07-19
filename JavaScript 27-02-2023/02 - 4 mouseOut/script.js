const hoverMeBtn = document.getElementById("hoverMeBtn") ;
// mouseover event
hoverMeBtn.addEventListener("mouseover", ()=>{
	hoverMeBtn.innerHTML = "leave me"
	
})

// mouseleave event
hoverMeBtn.addEventListener("mouseleave", ()=>{
	hoverMeBtn.innerHTML = "hover me"
})

// mouseleave -> work with only selected element
// mouseout -> work with selected + selected element of child also 