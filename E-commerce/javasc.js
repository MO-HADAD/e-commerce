const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('nav-bar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}




var main = document.getElementById("MainImg");
var small =document.getElementsByClassName("small-img")
var pro = document.getElementsByClassName("pro")


// for(var i =0 ; i<=small.length;i++){
//     small[i].onclick=function(){
//         main.src=small[i].src;
//     }
// }

small[0].onclick=function(){
    main.src=small[0].src;
}
small[1].onclick=function(){
    main.src=small[1].src;
}
small[2].onclick=function(){
    main.src=small[2].src;
}
small[3].onclick=function(){
    main.src=small[3].src;
}
function swap (){
    window.location.href='sproduct.html';
}

const emailInput = document.getElementById("email");

emailInput.addEventListener("input", function() {
  const email = emailInput.value;

  // Regular expression to validate email addresses
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!regex.test(email)) {
    alert("Please enter a valid email address");
  }
});








// var cart =document.getElementById("cartsymbol");
// cart.addEventListener("click",function(){
//     var row = document.createElement('tr')
//     var idCell = document.createElement('td')
//     idCell.innerHTML = tb.rows.length;
//     var nameCell = document.createElement('td')
//     nameCell.innerHTML=person.name;
//     var ageCell = document.createElement('td')
//     ageCell.innerHTML=person.age;
//     var actionCell = document.createElement('td')
//     actionCell.innerHTML=person.action;

//     row.appendChild(idCell);
//     row.appendChild(nameCell);
//     row.appendChild(ageCell);
//     row.appendChild(actionCell);
// })