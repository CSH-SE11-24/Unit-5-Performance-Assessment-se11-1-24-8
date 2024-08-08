// I had to create a new javascript file for the did you know file 


let dark = document.querySelector("#darkMode")
let light = document.querySelector("#lightMode")

dark.addEventListener("click",function(event){
  body.style.backgroundColor="#82bce0"
})
dark.addEventListener("click",function(event){
  body.style.color="#d1eff0"
})

light.addEventListener("click",function(event){
  body.style.backgroundColor="#6b1919"
})
light.addEventListener("click",function(event){
  body.style.color="#b00c0c"
})


