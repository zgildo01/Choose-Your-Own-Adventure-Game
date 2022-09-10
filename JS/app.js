/*-------------------------------- Constants --------------------------------*/
const storyChunks = []; //Fill this out tomorrow, I better see a story in here nerd. I'll kill you. I know where you live. 



/*---------------------------- Variables (state) ----------------------------*/
let page = -1; //incrememt every time user clicks on either btn 1, 2 or 3, this will help us decide what index to pull our story from


/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name")
const playerNameContainer = document.querySelector("#player-name")



/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener('click', formHandler);


/*-------------------------------- Functions --------------------------------*/
function formHandler(evt) {
  evt.preventDefault();
  const playerName = document.createElement('p');
  playerName.setAttribute("id", "#user-input-name");
  playerName.textContent = `Welcome home, ${chosenName.value}.`;
  playerNameContainer.appendChild(playerName);
  submitBtn.style.display = "none";
  chosenName.style.display = "none";
}