const details1=document.querySelector('#plus-1');
const details2=document.querySelector('#plus-2');
const details3=document.querySelector('#plus-3');
const details4=document.querySelector('#plus-4');
const details5=document.querySelector('#plus-5');
const details6=document.querySelector('#plus-6');
let plus1 = document.querySelector(".containt-details-1");
let plus2 = document.querySelector(".containt-details-2");
let plus3 = document.querySelector(".containt-details-3");
let plus4 = document.querySelector(".containt-details-4");
let plus5 = document.querySelector(".containt-details-5");
let plus6 = document.querySelector(".containt-details-6");
let close1= document.querySelector("#close-1");
let close2= document.querySelector("#close-2");
let close3= document.querySelector("#close-3");
let close4= document.querySelector("#close-4");
let close5= document.querySelector("#close-5");
let close6= document.querySelector("#close-6");

details1.addEventListener("click", function(){
    if (plus1.style.display === "none"){
        details1.style.display = "none"
        close1.style.display = "block";
        plus1.style.display="block";
        plus2.style.display="none";
        plus3.style.display="none";
        plus4.style.display="none";
        plus5.style.display="none";
        plus6.style.display="none";
    } else{
        plus1.style.display="none"   
    }
})

details2.addEventListener("click", function(){
    if (plus2.style.display === "none"){
        details2.style.display = "none"
        close2.style.display = "block";
        plus2.style.display="block";
        plus1.style.display="none";
        plus3.style.display="none";
        plus4.style.display="none";
        plus5.style.display="none";
        plus6.style.display="none";
    } else{
        plus2.style.display="none"   
    }
})

details3.addEventListener("click", function(){
    if (plus3.style.display === "none"){
        details3.style.display = "none"
        close3.style.display = "block";
        plus3.style.display="block";
        plus2.style.display="none";
        plus1.style.display="none";
        plus4.style.display="none";
        plus5.style.display="none";
        plus6.style.display="none";
    } else{
        plus3.style.display="none"   
    }
})

details4.addEventListener("click", function(){
    if (plus4.style.display === "none"){
        details4.style.display = "none"
        close4.style.display = "block";
        plus4.style.display="block";
        plus2.style.display="none";
        plus3.style.display="none";
        plus1.style.display="none";
        plus5.style.display="none";
        plus6.style.display="none";
    } else{
        plus4.style.display="none"   
    }
})

details5.addEventListener("click", function(){
    if (plus5.style.display === "none"){
        details5.style.display = "none"
        close5.style.display = "block";
        plus5.style.display="block";
        plus2.style.display="none";
        plus3.style.display="none";
        plus4.style.display="none";
        plus1.style.display="none";
        plus6.style.display="none";
    } else{
        plus5.style.display="none"   
    }
})

details6.addEventListener("click", function(){
    if (plus6.style.display === "none"){
        details6.style.display = "none"
        close6.style.display = "block";
        plus6.style.display="block";
        plus2.style.display="none";
        plus3.style.display="none";
        plus4.style.display="none";
        plus5.style.display="none";
        plus1.style.display="none";
    } else{
        plus6.style.display="none"   
    }
})

close1.addEventListener("click", function(){
    close1.style.display = "none";  
    details1.style.display = "block"
    plus1.style.display="none";     
})

close2.addEventListener("click", function(){
    close2.style.display = "none";
    details2.style.display = "block"
    plus2.style.display="none";     
})
close3.addEventListener("click", function(){
    close3.style.display = "none";
    details3.style.display = "block"
    plus3.style.display="none";     
})
close4.addEventListener("click", function(){
    close4.style.display = "none";
    details4.style.display = "block"
    plus4.style.display="none";     
})
close5.addEventListener("click", function(){
    close5.style.display = "none";
    details5.style.display = "block"
    plus5.style.display="none";     
})
close6.addEventListener("click", function(){
    close6.style.display = "none";
    details6.style.display = "block"
    plus6.style.display="none";     
})
