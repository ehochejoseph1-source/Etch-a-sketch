const container = document.getElementById("container")
let button = document.getElementById("refresh")


function createGrid(squaresPerSide) {
   container.innerHTML = "";
 
    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    let cell =document.createElement("div")
    cell.classList.add('grid-cell');
    
    cell.style.height = `${100 / squaresPerSide}%`
    cell.style.width = `${100 / squaresPerSide}%`
    
    

    cell.addEventListener("mouseenter", function(){
        cell.style.backgroundColor = "red"
    })
    container.appendChild(cell)
}
}
createGrid(60)


