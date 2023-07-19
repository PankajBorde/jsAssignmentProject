const body = document.getElementById("mainBody") ;
const displayScreen = document.getElementById("display")

//  keydown event
body.addEventListener("keydown", (e)=>{
	displayScreen.style.visibility = "visible" ;
	displayScreen.innerText = "You pressed key is "+e.code ;
})

// keypress event
// Deprecated: This feature is no longer recommended. Though some browsers might still support it, it may have already been removed from the relevant web standards, may be in the process of being dropped, or may only be kept for compatibility purposes. Avoid using it, and update existing code if possible; see the compatibility table at the bottom of this page to guide your decision. Be aware that this feature may cease to work at any time.
// use 'beforeinput' or 'keydown' instead of keypress event
// but in our case keydown is perfect ..