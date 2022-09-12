/*-------------------------------- Constants --------------------------------*/
const storyChunks = {
  "begin": {
    "content": "You awaken in the greater sea of souls; having just gained consciousness you are but a fraction of what you will become throughout your development. Would you like to begin?",
    "responses": {
      "a": "Stay here",
      "b": "Plan to expound your malicious tendencies",
      "c": "Begin development",
    }
  }
}



/*---------------------------- Variables (state) ----------------------------*/
let page = -1;


/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name")
const playerNameContainer = document.querySelector("#player-name")
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const storyContent = document.querySelector("#story-content");
const storyA = document.querySelector("#story-A")
const storyB = document.querySelector("#story-B")
const storyC = document.querySelector("#story-C")



/*----------------------------- Event Listeners -----------------------------*/
submitBtn.addEventListener('click', gameInit);
btn1.addEventListener('click', chooseOption);
btn2.addEventListener('click', chooseOption);
btn3.addEventListener('click', chooseOption);

/*-------------------------------- Functions --------------------------------*/
function gameInit(evt) {
  formHandler(evt);
  revealOptions();
  
  storyContent.textContent = "This is your new home, you've existed here for ages. Do you remember?";
}

function formHandler(evt) {
  evt.preventDefault();
  const playerName = document.createElement('p');
  playerName.setAttribute("id", "#user-input-name");
  playerName.textContent = `Welcome home, ${(chosenName.value).substring(0, 1).toUpperCase()+ (chosenName.value).substring(1)}.`;
  playerNameContainer.appendChild(playerName);
  submitBtn.style.display = "none";
  chosenName.style.display = "none";
}

function revealOptions() {
  btn1.removeAttribute("hidden");
  btn2.removeAttribute("hidden");
  btn3.removeAttribute("hidden");
}

function chooseOption(evt) {
  storyContent.textContent = "";
  page++;
  
  
}