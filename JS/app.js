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
      "c": ""
    }
  }
}



/*---------------------------- Variables (state) ----------------------------*/
let page = 0;


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
  page++;
  
  renderStory();
}

function renderStory() {
  let currentStoryChunk = storyChunks[story]
  
}