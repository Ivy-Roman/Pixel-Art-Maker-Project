// set global variables
const colorPicker = document.querySelector("#colorPicker");
const sizePicker = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
const inputWidth = document.querySelector("#inputWidth");
const inputHeight = document.querySelector("#inputHeight");


// add listener to select grid size
sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    let width = inputWidth.value;
    let height = inputHeight.value;
    makeGrid(width, height);
})


// Draw grid
function makeGrid(width, height) {
    table.innerHTML = '';
    for (let r = 0; r < width; r++) {
    let row = table.insertRow();
        for (let c= 0; c < height; c++ ) {
        let cell = row.insertCell();
        cell.onclick = changeColor;
        }
    }
}


// change the color of the clicked cell to current color
function changeColor() {
    this.style.background = colorPicker.value;
}
