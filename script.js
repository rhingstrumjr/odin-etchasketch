// On page load, create a 50 sided grid
// The cells have a class called sketchCell
// Width and height will be 500 / number per side
// hovering over the cell will cause it to change color

const createGrid = function (side) {
    const size = Math.floor(side);
    if (isNaN(size)|| size < 1 || size > 100) {
        return createGrid(prompt("The number must be between 1 and 100."));
    }
    const sketchArea = document.getElementById("sketchArea");
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild)
    }
    for (let index = 0; index < size * size; index++) {
        const newCell = document.createElement('div');
        newCell.classList.add("sketchCell");
        newCell.style.width = `${500/size}px`;
        newCell.style.height = `${500/size}px`;
        sketchArea.appendChild(newCell);
    }
    sketch()
}

function sketch () {
    const cells = document.getElementsByClassName("sketchCell")
    console.log(cells.length)
    for (let i = 0; i < cells.length; i++) {
        cells[i].addEventListener("mouseover", () => {
            cells[i].style.backgroundColor = "black";
        })
    }
}

function reset () {
    const sketchArea = document.getElementById("sketchArea");
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    }
    createGrid(prompt('How large of a grid do you want it? (max is 100)'))
}