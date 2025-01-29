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


createBoard('yellow','player');
createBoard('pink','computer');

flipbutton.addEventListener('click',flip);