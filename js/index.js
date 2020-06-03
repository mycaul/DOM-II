// you code goes here 


//load events




//Body 


const body = document.querySelector('h2')
console.log("check", body)
body.addEventListener("load", () =>{
    body.style.color = 'green'
})

//HEADER 
const headers = document.querySelectorAll('h2')
console.log("check", headers)
headers.forEach((element, index) =>{
    headers[index].addEventListener('load', (element) =>{
        headers[index].style.webkitTransform = 'scale(2)';
    })
})


//Mouse Enter Event Images

//Images
const mainImg = document.querySelectorAll('img')
console.log('check', mainImg)
mainImg.forEach((element, index) =>{
    //Mouse Enter
    mainImg[index].addEventListener('mouseenter', (element) => {
        mainImg[index].style.transform = "scale(1.2)"
        mainImg[index].style.transition = "all 0.3s"
    })
})

// Mouse leave
mainImg.forEach((element, index) =>{
    mainImg[index].addEventListener('mouseleave', (element) =>{
   mainImg[index].style.transform = "scale(1)";   
})
})

//CLICK events
        //Nav
        const nav = document.querySelectorAll('a')
        console.log('check', nav)
        nav.forEach((element, index) =>{
            //Click
            nav[index].addEventListener('click', (element) =>{
                nav[index].style.color = 'purple'
            })
        })
        nav.forEach((element, index) => {
                    //Prevent Default
         nav[index].addEventListener('click', (element) => {
            event.preventDefault() 
          })
      })
              //Buttons
     const button = document.querySelectorAll('.btn')
     console.log("check", button)
     button.forEach((element, index) => {
         button[index].addEventListener('click', (element) =>{
         button[index].style.backgroundColor = 'purple'
         button[index].style.color = 'white'
         })
     })

         //DblClick Events
         //Text
         const text = document.querySelectorAll('p')
         console.log('check', text)
         text.forEach((element, index) => {
             text[index].addEventListener('dblclick', (element) =>{
             text[index].style.color = 'white'
             })
         })
// mouseover
let heading = document.querySelector("header h1")
heading.addEventListener("mouseover", (event) => {
    event.target.style.fontSize = "6rem";
})

// keydown
function enterBtn(event){
    if(event.key === "Enter"){
        scroll(0, 1500);
    }
}
document.addEventListener("keydown", enterBtn)

// wheel
let scale = 1
const headerImg = document.querySelector(".container .intro img")

function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.125, scale), 4);
    headerImg.style.transform = `scale(${scale})`;
  }

headerImg.addEventListener("wheel", zoom)

// drag / drop
var dragged;

/* events fired on the draggable target */
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);


// load
window.addEventListener("load", (event) => {
    alert("FUNNNN BUSS!!!!!")
  })

// focus
const navItems = document.querySelectorAll("nav a")

navItems.forEach(element => element.addEventListener("focus", (event) => {
  event.target.style.color = "purple"
}))



// resize 
const heightOutput = document.querySelector('#height')
const widthOutput = document.querySelector('#width')

window.addEventListener("resize", function(event){
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;  
})

// scroll
window.addEventListener("scroll", function(event){
  console.log("scrolling")
})

// select
function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.querySelector('input');
input.addEventListener('select', logSelection);

// dblclick
navItems.forEach(element => element.addEventListener("dblclick", (event) => {
  event.target.style.fontSize = "2rem"
}))