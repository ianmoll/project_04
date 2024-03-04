let rulesBtn = document.getElementById("rules-btn");
let x = document.getElementById("x");
let rulesModal = document.getElementById("rules-modal");
let hurrayContainer = document.getElementById("hurray-container");
let nextBtn = document.getElementById("next-btn");
let container = document.getElementById("container")
let boxShadowSystem = document.querySelector(".box-shadow-system")
let boxShadow = document.querySelector(".box-shadow")
// let winModal = document.getElementById("winModal")




let userScore = document.getElementById("userScore");
let Scoree = 0;
let CompScore = 0;

const handOptions = {
  Rock: "/image/Rock.png",
  Paper: "/image/Paper.png",
  Scissor: "/image/Scissor.png",
};

// let rockbtn = document.getElementById("Rock")

const circleButton = (hand) => {
  // alert(hand)
  let line = document.querySelector(".line")
  line.style.display = "none";
  let circle = document.getElementById("circles")
  circle.style.display = "none"


  let winModal = document.querySelector("#winModal");
  winModal.style.display = "flex";
 

  let source = document.getElementById("userPickImag");
  source.src = handOptions[hand];

  //  random()
  let result = pickComputerHand();
  referee(hand, result);
  // console.log(referee);
};

const pickComputerHand = () => {
  const hands = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * 3);

  let result = hands[random];
  // console.log("random", result);

  // console.log(random);

  document.getElementById("computerPickImge").src = handOptions[result];

  return result;
};

const referee = (userHand, result) => {
  if (userHand == "Paper" && result == "Scissor") {
    var outerCircle = document.getElementById("outer-circle");
    var outerCircleSystem = document.getElementById("outer-circle-system");
    document.getElementById("next-btn").style.display = "none";

    outerCircle.style.backgroundColor = "#FFA943";
    outerCircleSystem.style.backgroundColor = "#BD00FF";
    boxShadow.style.display  = "none"
    boxShadowSystem.style.display= "block";

    setDecision("YOU LOST");
    setScoreSystem(CompScore + 1);
  }
  if (userHand == "Paper" && result == "Rock") {
   document.getElementById("outer-circle").style.backgroundColor = "#FFA943";
    document.getElementById("outer-circle-system").style.backgroundColor = "#0074b6";
    document.getElementById("next-btn").style.display = "block";
    boxShadowSystem.style.display = "none"
    boxShadow.style.display = "block"
     
    


    setDecision("YOU WIN");
    setScore(Scoree + 1);
  }
  if (userHand == "Paper" && result == "Paper") {
    document.getElementById("outer-circle").style.backgroundColor = "#FFA943";
    document.getElementById("outer-circle-system").style.backgroundColor = "#FFA943";
    document.getElementById("next-btn").style.display = "none";

 
    // document.getElementById("decision-span").style.display="none";
    var replay = document.getElementById("playAgain").innerHTML = "REPLAY";
    // replay.style.top = "23px"
    boxShadow.style.display = "none";
    boxShadowSystem.style.display = "none";


    setDecision("TIE UP ");
  }
  if (userHand == "Rock" && result == "Scissor") {
    document.getElementById("outer-circle").style.backgroundColor = "#0074b6";
    document.getElementById("outer-circle-system").style.backgroundColor = "#BD00FF";
    document.getElementById("next-btn").style.display = "block";
    boxShadow.style.display="block";
    boxShadowSystem.style.display = "none";

    setDecision("YOU WIN");
    setScore(Scoree + 1);
  }
  if (userHand == "Rock" && result == "Rock") {
    document.getElementById("outer-circle").style.backgroundColor = "#0074b6";
    document.getElementById("outer-circle-system").style.backgroundColor = "#0074b6";
    document.getElementById("next-btn").style.display = "none";

    document.getElementById("playAgain").innerHTML = "REPLAY";
    boxShadow.style.display = "none";
    boxShadowSystem.style.display= "none";

    setDecision("TIE UP");
  }
  if (userHand == "Rock" && result == "Paper") {
    document.getElementById("outer-circle").style.backgroundColor = "#0074b6";
    document.getElementById("outer-circle-system").style.backgroundColor = "#FFA943";
    document.getElementById("next-btn").style.display = "none";
    boxShadowSystem.style.display = "block";
    boxShadow.style.display = "none";
    
    setDecision("YOU LOST");
    setScoreSystem(CompScore + 1);
  }
  if (userHand == "Scissor" && result == "Rock") {
    document.getElementById("outer-circle").style.backgroundColor = "#BD00FF";
    document.getElementById("outer-circle-system").style.backgroundColor = "#0074b6";
    document.getElementById("next-btn").style.display = "none";
    boxShadowSystem.style.display = "block";
    boxShadow.style.display = "none";

    setDecision("YOU LOST");
    setScoreSystem(CompScore + 1);
  }
  if (userHand == "Scissor" && result == "Paper") {
    document.getElementById("outer-circle").style.backgroundColor = "#BD00FF";
    document.getElementById("outer-circle-system").style.backgroundColor = "#FFA943";
    document.getElementById("next-btn").style.display = "block";
    boxShadow.style.display = "block";
    boxShadowSystem.style.display = "none";
    
    

    setDecision("YOU WIN");
    setScore(Scoree + 1);
    
  }
  if (userHand == "Scissor" && result =="Scissor") {
    document.getElementById("outer-circle").style.backgroundColor = "#BD00FF";
    document.getElementById("outer-circle-system").style.backgroundColor = "#BD00FF";
    document.getElementById("next-btn").style.display = "none";
    boxShadow.style.display = "none";
    boxShadowSystem.style.display ="none";

   
    document.getElementById("playAgain").innerHTML = "REPLAY";



    setDecision("TIE UP");
  
  }
};









const newGame = () => {
  let winModal = document.getElementById("winModal")
  winModal.style.display = "none";
  let lowerContainer = document.getElementById("lower-container");
  let line = document.querySelector(".line")
  line.style.display = "flex";
  let circle = document.getElementById("circles")
  circle.style.display = "flex"


};
const setDecision = (decision) => {
  document.getElementById("decision-heading").innerHTML = decision;
  
  
};

// set localstorage value
const setScore = (score) => {
//  CompScore = CompScor;
//  console.log(CompScor);
  Scoree = score;
  console.log(Scoree);

  
  let userScore = document.getElementById("userScore");
  userScore.innerHTML = Scoree;

}
const setScoreSystem =(scoreSystem)=>{
  CompScore = scoreSystem;
  let systemScore = document.getElementById("systemScore");
systemScore.innerHTML = CompScore;
}










// **LocalStorageTry**  

//   let userSerialized = JSON.stringify(Scoree);
//   console.log(userSerialized);

//   localStorage.setItem("user", userSerialized);

//   let userDeserialized = JSON.parse(localStorage.getItem("user", userSerialized));

//   // var final = score + userDeserialized;
//   console.log(final);


// var userScore = document.getElementById("userScore")
// userScore.innerHTML = final;
  








// var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
// userData.push({
//   name: score
// })

// localStorage.setItem("userDetails", JSON.stringify(userData))

// console.log(userData);




// let getPlayerScore = localStorage.getItem("userScore") || 0;




// **
// let displayData = ()=>{
 
//   var userData = JSON.parse(localStorage.getItem("userDetails")) ?? [];
//   let finalData = '';
//   userData.forEach((element,i) =>{
//     console.log(element.name)
// finalData += `
// <span id="systemScore">${element.name}</span>
// `
// var compScore = document.getElementById("comp-score");
// compScore.innerHTML = finalData;


//   })
  // console.log(userData);
// }
// displayData();
// **












// };












rulesBtn.onclick = function () {
  if ((x.style.display = "none")) {
    x.style.display = "block";
    rulesModal.style.display = "block";
  }
};

x.onclick = () => {
  rulesModal.style.display = "none";
  x.style.display = "none";
};

function rules() {
  var rulesFunction = document.getElementById("rules-function");
  var closeBtn = document.getElementById("cross-btn");
  if ((rulesFunction.style.display = "none")) {
    rulesFunction.style.display = "block";
  }
}


const hurrayDisplay = ()=>{
  container.style.display = "none";
  hurrayContainer.style.display="block";
}
const HurrayNewGame =()=>{
  hurrayContainer.style.display ="none";
 nextBtn.style.display = "none";
// winModal.style.display = "none";
container.style.display  = "block";
}