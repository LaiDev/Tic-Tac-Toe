let container = document.querySelector(".container");

//Creates and renders the game Board on the webPage

let GameBoard = (() => {
  let gameBoard = [];

  let createBoard = () => {
    for (let i = 0; i < 9; i++) {
      //Creates the Game Squares
      let square = document.createElement("div");
      square.classList.add("board-square");
      container.append(square);
      gameBoard.push(square);
    }
  };
  createBoard();

  return { gameBoard, createBoard };
})();

console.log(GameBoard.gameBoard);
