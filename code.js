const flipbutton = document.querySelector('#flip-button');
const optioncontiner= document.querySelector('.option-continer');
const gamesBoardContiner= document.querySelector('.gameBoardContiner');
let angle=0;
function flip(){

    const optionShips= Array.from(optioncontiner.children);
    if(angle===0){
        angle=90;        
    }else{
        angle=0;
    }
    optionShips.forEach(optionShips=> optionShips.style.transform= `rotate(${angle}deg`);


}
// creating baords
const width=10;

function createBoard(color,user){

    
  const gameBoardContiner= document.createElement('div');
  gameBoardContiner.classList.add('game-board');

  gameBoardContiner.style.backgroundColor=color;
  gamesBoardContiner.append(gameBoardContiner);

gameBoardContiner.id=user;

for(let i=0 ; i<width*width;i++){
    const block=document.createElement('div');
    block.classList.add('block');
    block.id=i;
    gameBoardContiner.append(block);
}

}

// creating the ships
class ship{
    constructor(name,length){
        this.name=name;
        this.length=length;

    }
}

const destroyer=new ship('destroyer',2);
const submarine = new ship('submarine',3);
const cruiser= new ship('cruiser',3);
 const battleship = new ship('battleship',4)
 const carrier = new ship('carrier',5);

 const ships=[ destroyer,submarine,cruiser,battleship,carrier];

 function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div');
    const width = 10; // Grid size (10x10)
    let isHorizontal, validStart, shipBlocks;
    let isValidPlacement = false;
  
    while (!isValidPlacement) {
      isHorizontal = Math.random() < 0.5;
      const randomStartIndex = Math.floor(Math.random() * width * width);
  
      // Fixed boundary checks
      if (isHorizontal) {
        const row = Math.floor(randomStartIndex / width);
        const maxColumnStart = width - ship.length;
        validStart = row * width + Math.min(randomStartIndex % width, maxColumnStart);
      } else {
        const maxRowStart = width - ship.length;
        validStart = Math.min(randomStartIndex, maxRowStart * width);
      }
  
      shipBlocks = [];
      isValidPlacement = true;
  
      // Check each block
      for (let i = 0; i < ship.length; i++) {
        const blockIndex = isHorizontal ? 
          validStart + i : 
          validStart + i * width;
  
        if (
          blockIndex >= width * width ||
          (isHorizontal && Math.floor(blockIndex / width) !== Math.floor(validStart / width)) ||
          allBoardBlocks[blockIndex].classList.contains('taken')
        ) {
          isValidPlacement = false;
          break;
        }
        shipBlocks.push(allBoardBlocks[blockIndex]);
      }
    }
  
    // Mark blocks as taken
    shipBlocks.forEach(block => {
      block.classList.add(ship.name, 'taken');
    });
  }
// Drag player ships
let draggedShip;
 const optionShips=Array.from(optioncontiner.children)
optionShips.forEach(optionShip=> optionShip.addEventListener('dragstart',dragstart));

const allPlayerBlocks=document.querySelectorAll('#player div');
allPlayerBlocks.forEach(PlayerBlock=>{
  PlayerBlock.addEventListener('dragover',dragOver);
  PlayerBlock.addEventListener('drop',dropShip);
})
function dragstart(e){
    draggedShip=e.target;

}
function dragOver(e){
  e.prevantDefault();
}
function dropShip(e){

  e.target.id
}

createBoard('yellow','player');
createBoard('pink','computer');
ships.forEach(ship=> addShipPiece(ship));
flipbutton.addEventListener('click',flip);