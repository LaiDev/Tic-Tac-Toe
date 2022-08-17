
//Creates and renders the game Board on the webPage

let gameBoard = (() => {

    let container = document.querySelector(".container")

    let gameBoard = ["","","","","","","","",""];
    

    for(let i = 0; i < gameBoard.length; i++)
    {
        //Creates the Game Squares 
        let square = document.createElement("div")
        square.classList.add("board-square")
        container.append(square);
    }


})


gameBoard();
