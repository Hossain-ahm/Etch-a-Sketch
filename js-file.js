const gridContainer = document.getElementById('grid-container');
const button = document.getElementById("btn")

makeGrid(16)

button.addEventListener("click", () =>{
    let input = prompt("dimensions: ")
    if (input <= 100){
        while (gridContainer.firstChild) {
            gridContainer.removeChild(gridContainer.firstChild);
        }
        makeGrid(input)
    }
})

function hover(item){
    item.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "blue"
    })
    item.addEventListener("mouseout", (event) =>{
        event.target.style.backgroundColor = "#eee"
    })
}

function makeGrid(dimension){
    for (let i = 0; i < dimension * dimension; i++) {
        const gridItem = document.createElement('div');
        gridItem.style.width = Math.floor(gridContainer.offsetWidth/dimension) +"px"
        gridItem.style.height = Math.floor(gridContainer.offsetWidth/dimension) +"px"
        gridItem.classList.add('grid-item');
        gridContainer.appendChild(gridItem);
        hover(gridItem)
    }
}