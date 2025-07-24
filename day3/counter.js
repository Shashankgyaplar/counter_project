const decreasebtn =document.getElementById("decreasebtn");
const resetbtn=document.getElementById("resetbtn");
const increasebtn=document.getElementById("increasebtn");
const Countlabel=document.getElementById("Countlabel");
let count=0;
increasebtn.onclick=function(){
    count++;
    Countlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    Countlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    Countlabel.textContent=count;
}