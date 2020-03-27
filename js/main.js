
const input1 = document.getElementById("inputId");
let counter = document.getElementById("H1")

const plusButton = document.getElementById("plusId")
const minusButton = document.getElementById("minusId")

let inNumber = 0

plusButton.addEventListener('click', addOne)
minusButton.addEventListener('click', minusOne)


function init(){
    input1.value = 1
    render();
}

function render(){
    if (inNumber < 0){
        counter.style.color = "red";
    }else counter.style.color = "black";
    counter.innerHTML = inNumber;
    }

function addOne(){
    inNumber = inNumber + parseInt(input1.value);
    counter.textContent = inNumber
    render()   
}

function minusOne(){
    inNumber = inNumber - parseInt(input1.value);
    counter.textContent = inNumber
    render()
}


let inputVal = document.getElementById("inputId").value;
console.log("this is inputVal "+inputVal)


init()

// function updValue() {
//     counter.textContent = inputVal 
//     // counter.textContent = parseInt(e.target.value)
//     // input1.getAttribute("step", e.target.value)
//     // let inp = parseInt(e.target.value)
//     // counter.textContent = inp++
// }
// setAttribute()
// input1.addEventListener('input', updValue);

/*
app has 2 incrimenting buttons
app has a counter do display numeric result
numeric result is calculated from:
    the user's number input
    added or minus the incrimental input
    
*/