const container = document.getElementById("container")


let squaresPerSide = 64
for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    let cell =document.createElement("div")
    cell.classList.add('grid-cell');
    container.appendChild(cell)
    

    cell.addEventListener("mouseenter", function(){
        cell.style.backgroundColor = "red"
    })
}
