const regexURL = /^(https:\/\/www.linkedin.com\/in\/)[(a-zA-Z0-9_\-)]{4,29}[(a-zA-Z0-9)]{1}$/;

let url = "";

document.querySelector("#url").addEventListener("input" , (e)=>{
  url = e.target.value ;
  document.querySelector("#op-block").innerText = "" ;
})

document.querySelector("#btn-validate").addEventListener("click" , ()=>{
  if(url != ""){
    if(regexURL.test(url)){
      document.querySelector("#op-block").innerText = "Your LinkedIn URL is Valid" ;
      document.querySelector("#op-block").style.color = "green" ;
    }
    else{
      document.querySelector("#op-block").innerText = "Your LinkedIn URL is Not-Valid" ;
      document.querySelector("#op-block").style.color = "red" ;
    }
  }
  else{
    alert("Please enter LinkedIn url ! !") ;
  }
})