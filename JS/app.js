/*-------------------------------- Constants --------------------------------*/
const storyChunks = {
  "begin": {
    "content": "You awaken in the greater sea of souls; having just gained consciousness you are but a fraction of what you will become throughout your development. Would you like to begin?",
    "responses": {
      "a": "Stay here",
      "b": "Give into your flaws",
      "c": "Begin development",
    }
  },
  //Ending 1, 
  "1_a": {
    "content": "And so you decide to stay; numerous aeons pass, but your soul never grows. You remain grounded in the ethereal sea of humanity and will never truly find out your fullest capabilities."
  },
  //Evil path
  "1_b": {
    "content": `Just as soon as you regained your consciousness you decided to use it for malice. The illfully gotten gains you attain from any endeavor you henceforth set out to accomplish will be in the name of your own survival. Does this really sound like what ${chosenName.value} wanted to be?`,
    "responses": {
      "a": "No, that can't be right",
      "b": "I've simply accepted what I am",
      "c": "I deserve it, I was born superior",
    }
  },
  //Good path
  "1_c": {
    "content": `Welcome then, ${chosenName.value}. Throughout this experience you will encounter many difficult choices, but these will strengthen your resolve. The difficulty itself of certain choices will tell you more about yourself. Are you ready to understand?`,
    "responses": {
      "a": "Of course",
      "b": "I'm unsure of what's happening",
      "c": "If it'll help me",
    }
  }
}



/*---------------------------- Variables (state) ----------------------------*/
let page = 0;


/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name")
const playerNameContainer = document.querySelector("#player-name")
const storyContent = document.querySelector("#story-content");
const confirmBtn = document.querySelector("#confirm-btn");



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
  playerName.textContent = `Welcome home, ${(chosenName.value).substring(0, 1).toUpperCase()+ (chosenName.value).substring(1)}.`;
  playerNameContainer.appendChild(playerName);
  submitBtn.style.display = "none";
  chosenName.style.display = "none";
}



function chooseOption(evt) {
  page++;
  
  renderStory();
}

function renderStory() {
  let currentStoryChunk = storyChunks[story]
  
}