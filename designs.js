const colorPicker = document.querySelector("#colorPicker");
const sizePicker = document.querySelector("#sizePicker");
const table = document.querySelector("#pixelCanvas");
const inputWidth = document.querySelector("#inputWidth");
const inputHeight = document.querySelector("#inputHeight");


sizePicker.addEventListener('submit', function(e) {
    e.preventDefault();
    let width = inputWidth.value;
    let height = inputHeight.value;
    makeGrid(width, height);
})


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


function changeColor() {
    this.style.background = colorPicker.value;
}
