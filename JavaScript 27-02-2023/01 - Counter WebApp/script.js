let disScreen = document.querySelector("#disScreen") ;
let decreBtn = document.querySelector("#decreBtn") ;
let increBtn = document.querySelector("#increBtn") ;
let resetBtn = document.querySelector("#resetBtn") ;
let temp ;

// click event on decrement button 
decreBtn.addEventListener("click" , ()=>{
	temp = Number(disScreen.innerText) ;
	disScreen.innerText = temp - 1 ;
})

// click event on increment button 
increBtn.addEventListener("click" , ()=>{
	temp = Number(disScreen.innerText) ;
	disScreen.innerText = temp + 1 ;
})

// click event on reset button 
resetBtn.addEventListener("click" , ()=>{
	disScreen.innerText = 0 ;
})