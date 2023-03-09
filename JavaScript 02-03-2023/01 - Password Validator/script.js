let pass1 = document.querySelector("#Pass-1") ;
let pass2 = document.querySelector("#Pass-2") ;
let proceed = document.querySelector(".proceed-btn") ;

let pass1Value = '' ;
let pass2Value = '' ;

function pass1ValueUpdater(e){
	console.log(e.target.value)
	pass1Value = e.target.value ;

}
function pass2ValueUpdater(e){
	console.log(e.target.value)
	pass2Value = e.target.value ;
}

pass1.addEventListener("input" , pass1ValueUpdater) ;
pass2.addEventListener("input" , pass2ValueUpdater) ;

function passValidator(){

	if(pass1Value == pass2Value && pass1Value != ""){
		console.log("Password Matched. Password validation Successful.") ;
		alert("Login Successful") ;
	}
	else{
		console.log("Password didn't match. Password validation unsuccessful") ;
		alert("Password  &  Confirm Password not matched ! !") ;
	}
}

proceed.addEventListener("click" , passValidator) ;

