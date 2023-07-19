const body = document.getElementById("mainBody") ;
const content = document.getElementById("container") ;

// key up event -> key released
body.addEventListener("keyup", (e)=>{
	content.innerText = "Key released : "+ e.code ;
	
})

// key down event -> key pressed
body.addEventListener("keydown", (e)=>{
	content.innerText = "Key pressed : "+ e.code ;
})
