const container = document.getElementById("container")
let button = document.getElementById("refresh")
let clearButton = document.getElementById("clear")
let currentSize = 16;
 let mouseIsDown = false;

 window.addEventListener("mousedown", () => mouseIsDown = true);
 window.addEventListener("mouseup", () => mouseIsDown = false);


function createGrid(squaresPerSide) {
   container.innerHTML = "";

    let currentOpacity = 0.7;
 
    for (let i = 0; i < (squaresPerSide * squaresPerSide); i++) {
    let cell =document.createElement("div")
    cell.classList.add('grid-cell');
    
    cell.style.height = `${100 / squaresPerSide}%`
    cell.style.width = `${100 / squaresPerSide}%`
    cell.style.opacity = 0.7;
    

    cell.addEventListener("mouseover", function(){
        if (!mouseIsDown) {
            return;
        }

       
        if (currentOpacity < 1) {
            currentOpacity += 0.1;
      } else if (currentOpacity = 1){
        currentOpacity = 0.2;
      }
        cell.style.opacity = currentOpacity;

        let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb( ${randomR}, ${randomG}, ${randomB})`
    })
    cell.addEventListener("mousedown", function() {
         let randomR = Math.floor(Math.random() * 256);
        let randomG = Math.floor(Math.random() * 256);
        let randomB = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb( ${randomR}, ${randomG}, ${randomB})`
    } )
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
        currentSize = newGrid;
    }
    
})
clearButton.addEventListener("click", function(){
    
    if (currentSize !== 16) {
        createGrid(currentSize)
    } else {
        createGrid(16)
    }
})


createGrid(16)


