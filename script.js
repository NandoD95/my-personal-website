const h1 = document.querySelector("h1");

// document.querySelector("body").appendChild(h1);

h1.addEventListener('mouseover' ,changeColor)
function changeColor(){
    h1.style.color = 'green'
}

h1.addEventListener('mouseout', changeColorBack)
function changeColorBack(){
    h1.style.color = 'black'
}

const dogs = document.querySelectorAll('p')