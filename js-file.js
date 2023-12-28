const gridContainer = document.getElementById('grid-container');

for (let i = 0; i < 16 * 16; i++) {
 const gridItem = document.createElement('div');
 gridItem.classList.add('grid-item');
 //gridItem.textContent = i +1
 gridContainer.appendChild(gridItem);
}

for (let item of gridContainer.childNodes){
    item.addEventListener("mouseover", (event) =>{
        event.target.style.backgroundColor = "blue"
    })
    item.addEventListener("mouseout", (event) =>{
        event.target.style.backgroundColor = "#eee"
    })
}
