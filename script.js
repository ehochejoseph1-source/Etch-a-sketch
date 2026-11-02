const container = document.getElementById("container")

for (let i = 0; i < 256; i++) {
    let cell =document.createElement("div")
    cell.classList.add('grid-cell');
    container.appendChild(cell)
    
    
}