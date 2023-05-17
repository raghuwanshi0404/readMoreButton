let myDots = document.getElementById("dots");
let moreData =   document.getElementById("more");
let buttonData = document.getElementById("btn");
console.log(buttonData);
 function myButtonFunc(){
if(myDots.style.display == "none"){
    myDots.style.display = "inline";
    moreData.style.display = "none";
    buttonData.innerHTML = "Read more";
    
}
else {
    myDots.style.display = "none" ;
    buttonData.innerHTML = "Read less";
    moreData.style.display = "inline";
}
 }