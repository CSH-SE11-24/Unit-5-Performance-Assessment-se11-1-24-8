console.log("Script running")
let body = document.querySelector("#body")

//selecting the correct elements for the image game in the index.html file

let image= document.querySelector("#bottoms")

let image3= document.querySelector("#shorts")

let image2= document.querySelector("#tops")

let images=document.querySelector(".images")

//using those values to be able to change the source to an imported image when hover over

image.addEventListener("mouseover", function(event){{
  image.src= "skirts.jpg"}
})

image.addEventListener("mouseout", function(event){{
  image.src= "pants.jpg"}
})

image3.addEventListener("mouseover", function(event){{
  image3.src= "womens shorts.jpg"}
})

image3.addEventListener("mouseout", function(event){{
  image3.src= "mens shorts.jpg"}
})

image2.addEventListener("mouseover", function(event){{
  image2.src= "womens tanktop.jpg"}
})

image2.addEventListener("mouseout", function(event){{
  image2.src= "mens tank top.jpg"}
})
 let dark = document.querySelector("#darkMode")
let light = document.querySelector("#lightMode")

//when the p tags attached to the dark and light varibles are clicked, the background and text color will change

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

light.addEventListener("click",function(event){
  body.style.fontFamily="Nosifer"
})
//when the first image is hovered over, a new p tag will appear

images.addEventListener("mouseover", function(event){
  p.textContent = "Most people would agree it's not the second option"
})
