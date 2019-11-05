var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body=document.getElementById("ti")

body.style.background="yellow";
color1.addEventListener("input",function()
{  body.style.background="linear-gradient(to right,"+color1 
,"gray)
    console.log(color1.value);
})
color2.addEventListener("input",function()
{
    console.log(color2.value);
})