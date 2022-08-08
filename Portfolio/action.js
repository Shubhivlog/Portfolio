let icon=document.getElementById('grid');
let below=document.getElementById('links');
let x=0;

icon.addEventListener('click',()=>{
    if(x==0){
        below.style.display="block";
    
    icon.innerHTML="<i class='bx bx-x'></i>";
    x=1;
    }
    else{
        below.style.display="none";
        icon.innerHTML="<i class='bx bx-grid-alt'></i>";
        x=0;
    }
})
let outer=document.getElementsByClassName('outer-div');
let skills=document.getElementsByClassName('outer-percents');
let arrow=document.querySelectorAll('.arrow');
let i=0;
let a=0;
outer[0].addEventListener('click',()=>{
    if(a==0){
        skills[0].style.display="block";
        arrow[0].innerHTML="<i class='bx bx-chevron-up'></i>";
        a=1;
    }
    else{
        skills[0].style.display="none";
        arrow[0].innerHTML="<i class='bx bx-chevron-down'></i>";
        a=0;
    }
})
let b=0;
outer[1].addEventListener('click',()=>{
    if(b==0){
        skills[1].style.display="block";
        arrow[1].innerHTML="<i class='bx bx-chevron-up'></i>";
        b=1;
    }
    else{
        skills[1].style.display="none";
        arrow[1].innerHTML="<i class='bx bx-chevron-down'></i>";
        b=0;
    }
})
let c=0;
outer[2].addEventListener('click',()=>{
    if(c==0){
        skills[2].style.display="block";
        arrow[2].innerHTML="<i class='bx bx-chevron-up'></i>";
        c=1;
    }
    else{
        skills[2].style.display="none";
        arrow[2].innerHTML="<i class='bx bx-chevron-down'></i>";
        c=0;
    }
})
let d=0;
outer[3].addEventListener('click',()=>{
    if(d==0){
        skills[3].style.display="block";
        arrow[3].innerHTML="<i class='bx bx-chevron-up'></i>";
        d=1;
    }
    else{
        skills[3].style.display="none";
        arrow[3].innerHTML="<i class='bx bx-chevron-down'></i>";
        d=0;
    }
})

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("imag");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "flex";  
}
var arr=document.getElementsByClassName('arrr');
arr[0].addEventListener('click',()=>{
    plusDivs(-1)
})
arr[1].addEventListener('click',()=>{
    plusDivs(1);
})