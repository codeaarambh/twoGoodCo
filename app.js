let vid=document.querySelector(".vedeo-container")
let ply=document.querySelector(".play")
vid.addEventListener("mouseenter",function(){
   gsap.to(ply,{
    opacity:1,
    scale:1,
 

   })
})
vid.addEventListener("mouseleave",function(){
    gsap.to(ply,{
     opacity:0,
     scale:0,
  

 
    })
 })
 vid.addEventListener("mousemove",function(a){
    gsap.to(ply,{
        left:a.x-65,
        top:a.y-80,
       
        
    })
 })