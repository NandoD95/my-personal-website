const h1 = document.querySelector("h1");

// document.querySelector("body").appendChild(h1);

h1.addEventListener('mouseover' ,changeColor)
function changeColor(){
    h1.style.color = 'gold'
}

h1.addEventListener('mouseout', changeColorBack)
function changeColorBack(){
    h1.style.color = 'black'
}

const p2 = document.querySelector('#p2')

p2.addEventListener('mouseover' ,changeCo)
function changeCo(){
    p2.style.color = 'pink'
}