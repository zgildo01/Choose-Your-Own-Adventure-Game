/*-------------------------------- Constants --------------------------------*/
const storyChunks = []; //Fill this out tomorrow, I better see a story in here nerd. I'll kill you. I know where you live. 



/*---------------------------- Variables (state) ----------------------------*/
let page = -1; //incrememt every time user clicks on either btn 1, 2 or 3, this will help us decide what index to pull our story from


/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name")
const playerNameContainer = document.querySelector("#player-name")
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");



/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener('click', gameInit);


/*-------------------------------- Functions --------------------------------*/
function gameInit(evt) {
  formHandler(evt);
  revealOptions();
}

function formHandler(evt) {
  evt.preventDefault();
  const playerName = document.createElement('p');
  playerName.setAttribute("id", "#user-input-name");
  playerName.textContent = `Welcome home, ${chosenName.value}.`;
  playerNameContainer.appendChild(playerName);
  submitBtn.style.display = "none";
  chosenName.style.display = "none";
}

function revealOptions() {
  btn1.removeAttribute("hidden");
  btn2.removeAttribute("hidden");
  btn3.removeAttribute("hidden");
}