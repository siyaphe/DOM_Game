let board = document.querySelector(".gameboard");
let pOne = document.querySelector(".oneSpace");
let pTwo = document.querySelector(".twoSpace");
let dataBox = document.querySelector(".infoBlock");
let p1score = document.querySelector(".pt1");
let p2score = document.querySelector(".pt2");
let bod = document.querySelector("body");
let p1Currently =""
let p2Currently=""
let firstRound = 0;
let gameStarted = false
let  scoreOne = 0
let scoreTwo = 0



console.log(p1Currently,"p1")
console.log(p2Currently,"p2")

let choices = {
  rock: {
    name: "Rock",
    image:
      "https://static.vecteezy.com/system/resources/previews/023/289/772/original/a-lifelike-rock-formation-inspired-by-nature-set-against-a-transparent-background-generative-ai-png.png",
  },
  paper: {
    name: "Paper",
    image:
      "https://static.vecteezy.com/system/resources/previews/009/340/337/original/white-crumpled-paper-balls-for-design-element-png.png",
  },
  sza: {
    name: "Scissors",
    image:
      "https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/School-Clipart/Scissors_PNG_Image.png?m=1440557701",
  },
};
if(p1score >=30 || p2score>=30 ){
  bod.replaceWith("THEE BAG HAS BEEN SECURED")
}
const startGame = () => {
  alert("Game Starting");
  startRound()
  generateScore()

  // startRound
  // generate p1 pieces
  // auto generate p2 choice
  // -----> find winner
  // addScore
  // increase Round
  // asses Round
  // *determine Champion
};
// Start Game

const generateScore =()=>{
  p1score.innerHTML =scoreOne
  p2score.innerHTML=scoreTwo
}
const startRound = () => {
  firstRound++
  let starter = document.querySelector('.rndNum')
  let finisher =document.querySelector('.rndFinal')

  starter.innerHTML = firstRound
};

const populateChoiceBox = () => {
  let choicer = document.createElement("div");
  choicer.setAttribute("class", "choicerBtn");
  // ------------------------------------------------->
  let smRock = document.createElement("img");
  smRock.setAttribute("class", "icon");
  smRock.setAttribute("src", choices.rock.image);
  smRock.addEventListener("click",()=>{
    playerOneChoose("rock")
  })
  // .--------------------------[R]
  let smPaper = document.createElement("img");
  smPaper.setAttribute("class", "icon2");
  smPaper.setAttribute("src", choices.paper.image);
  smPaper.addEventListener("click",()=>{
    playerOneChoose("paper")
  })
  // .--------------------------[P]
  let smSza = document.createElement("img");
  smSza.setAttribute("class", "icon3");
  smSza.setAttribute("src", choices.sza.image);
  smSza.addEventListener("click",()=>{
    playerOneChoose("scissor")
  })
  // .--------------------------[S]
  choicer.append(smRock);
  choicer.append(smPaper);
  choicer.append(smSza);

  bod.append(choicer);
};
const populateStartBtn = () => {
  let startBtn = document.createElement("div");
  startBtn.setAttribute("class", "sBtn");
  startBtn.innerHTML = "Start Game";
  startBtn.addEventListener("click", () => {
    gameStarted = true;
    initGame()
    startBtn.remove();
    startGame();
  });
  bod.append(startBtn);
};
const initGame = () => {
  gameStarted ? populateChoiceBox() : populateStartBtn();
};


// compareChoices
const compareAndScore = () =>{
  if(p1Currently === "rock" && p2Currently === "rock"){
    console.log("Draw")
    scoreOne -=10
    scoreTwo -=10
  }else if(p1Currently === "rock" && p2Currently === "paper"){
    console.log("Paper Covers Rock")
    scoreTwo += 10
  }else if(p1Currently==="rock "&&p2Currently==="scissor"){
    console.log("Rock Breaks Scissor")
    scoreOne +=10
  }
  // --------------------------------------??
  else if(p1Currently === "paper" && p2Currently === "rock"){
    console.log("Paper Covers Rock")
    scoreOne +=10
  }else if(p1Currently === "paper" && p2Currently === "paper"){
    console.log("Draw ")
    scoreOne -=10
    scoreTwo -= 10
  }else if(p1Currently==="paper "&&p2Currently==="scissor"){
    console.log("Scissor Cuts  Paper")
    scoreOne +=10
  }
  // --------------------------------------??
   else if(p1Currently === "scissor" && p2Currently === "rock"){
    console.log("Rock Breaks Scissors")
    scoreTwo +=10
  }else if(p1Currently === "scissor" && p2Currently === "paper"){
    console.log("Scissor Cuts Paper")
    scoreOne += 10
  }else if(p1Currently==="scissor "&&p2Currently==="scissor"){
    console.log("Draw")
    scoreOne +=10
  }
  else{
    alert("Something is wrong")
  }
  // Rock beats Scissor
  // Rock losses to paper
  // Rock draws to rock
  declareWinner ()
  
}
const resetBattle = () => {
  p1Currently =""
  p2Currently = ""
  pOne.innerHTML = ""
  pTwo.innerHTML  = ""
}
const declareWinner = () =>{
  console.log("Looking for Winner")
  generateScore()
  startRound()
 if(p1score>=30){
  alert("Player One Wins")
 }else if(p2score>=30){
  alert("Player Two Wins")
 }
 else{
  resetBattle()
 }
}
  // declareWinner
  // resetChoices
const playerOneChoose = (icon) => {
  if(icon === "rock"){
    p1Currently = "rock"
    populateChoice(pOne,"rock")
  } else if(icon === "paper"){
    p1Currently = "paper"
    populateChoice(pOne,"paper")
  }else{
    p1Currently = "scissor"
    populateChoice(pOne,"scissor")
  }
};
const playerTwoChoose = () => {
  // getRandomChoice
  let rando = Math.floor(Math.random() * (4 - 1) +1)
  console.log(rando,"Random")
  if(rando === 1){
    p2Currently = "rock"
    populateChoice(pTwo,"rock")

  }else if(rando === 2){
    p2Currently = "paper"
    populateChoice(pTwo,"paper")
   
  }else if(rando === 3){
    p2Currently = "scissor"
    populateChoice(pTwo,"scissor")
   
  }

  // compareChoices
  // declareWinner
  // resetChoices
};

const insertData = (pos, text, img) => {
  dataBox.innerHTML = `${text} versus `;
  let weapon = document.createElement("img");
  weapon.setAttribute("src", img);
  weapon.setAttribute("class", "weapon");
  pos.append(weapon);
};

const populateChoice = (person, choice) => {
  switch (choice) {
    case "rock":
      console.log("Rock Chosen")
      insertData(person, choices.rock.name, choices.rock.image);
      break;
    case "paper":
      console.log("Paper Chosen")
      insertData(person, choices.paper.name, choices.paper.image);
      break;
    case "scissor":
      console.log("Scissor Chosen")
      insertData(person, choices.sza.name, choices.sza.image);
      break;
  }
};

initGame();

// compareAndScore(p1Currently,p2Currently)