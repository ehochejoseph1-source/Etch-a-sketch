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

button.addEventListener("click", function(){
    input = prompt("Input a number for your new layout, between 1 to 100");
    let newGrid = parseInt(input)

    if (newGrid > 100) {
        alert("I said a number less than or equal to 100")
    }else{
        createGrid(newGrid)
    }
    
})


createGrid(16)


