/*-------------------------------- Constants --------------------------------*/
const storyChunks = {
  "begin": {
    "content": "You awaken in the greater sea of souls; having just gained consciousness you are but a fraction of what you will become throughout your development. Would you like to begin?",
    "responses": {
      "a": "Stay here",
      "b": "Explore your thoughts",
      "c": "Begin development",
    }
  },
  //Ending 1, 
  "1_a": {
    "content": "And so you decide to stay; numerous aeons pass, but your soul never grows. You remain grounded in the ethereal sea of humanity and will never truly live out your fullest capabilities. This is how you've chosen to meet your end.",
  },
  //Good path
  "1_b": {
    "content": `You decide to explore the thoughts that perturbed countless of the lives you've lived; solemnly you reflect on one life you've lived in particular, you were a SWAT commander tasked with taking down a cult known for kidnappings and forced indoctrinations; were you civil with them?`,
    "responses": {
      "a": "I was just and forthcoming.",
      "b": "I didn't take them seriously.",
      "c": "I was brutal in how I ordered the assault.",
    }
  },
  "2_a": {
    "content": "Their souls were intertwined with yours, they understood you just as much as you understood them. That's how you ended up here. Don't you worry though, my lost child; salvation awaits you. Do you intend to continue your path of righteousness?",
    "responses": {
      "a": "I don't think I will.",
      "b": "I intend to be a good person.",
    } 
  },

  //Evil path
  "1_c": {
    "content": `Throughout this experience you will encounter many scary and confusing choices, but these will strengthen your resolve. The difficulty of certain choices will tell you more about yourself than your response at times. Are you ready to understand?`,
    "responses": {
      "d": "Of course.",
      "e": "I don't care what this is. I'm not participating.",
    }
  }

}
const letters = /^[A-Za-z]+$/


/*---------------------------- Variables (state) ----------------------------*/
let page = 0;
let playerName = '';

/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name")
const playerNameContainer = document.querySelector("#player-name")
const storyContent = document.querySelector("#story-content");
const confirmBtn = document.querySelector("#confirm-btn");
const resetBtn = document.querySelector("#reset-btn");
const options = document.querySelector("#options");
const choiceBtn = document.querySelector("#choice-btn");
const startBtn = document.querySelector("#start");


/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', gameInit);
submitBtn.addEventListener('click', formHandler);
confirmBtn.addEventListener('click', chooseOption);
resetBtn.addEventListener('click', reset);
choiceBtn.addEventListener('click', function(evt) {
  confirmBtn.removeAttribute("hidden");
})


/*-------------------------------- Functions --------------------------------*/
function gameInit() {
  resetBtn.removeAttribute("hidden");
  storyContent.innerHTML = '';
  renderStory("begin");
  startBtn.style.display = "none";
}

function formHandler(evt) {
  evt.preventDefault();
  playerName = chosenName.value;
  renderPlayerName();
}

function renderPlayerName() {
  if(playerName.match(letters) && playerName.length <= 20){
    const playerNameP = document.createElement('p');
    playerNameP.setAttribute("id", "#user-input-name");
    playerNameP.textContent = `Welcome home, ${(playerName).substring(0, 1).toUpperCase()+ (playerName).substring(1)}.`;
    playerNameContainer.appendChild(playerNameP);
    submitBtn.style.display = "none";
    chosenName.style.display = "none";
    startBtn.removeAttribute("hidden");
  } else {
    storyContent.innerHTML = "Your name was less than 20 characters and only contained letters as far as I remember..."
  }
}

function reset() {
  window.location.reload();
}

function chooseOption(evt) {
  response = document.querySelectorAll('input[type=radio]:checked')[0].value;
  if(response) {
    page++;
    renderStory(page + "_" + response);
  }
}

function renderStory(story) {
  let currentStoryChunk = storyChunks[story];
  let text = '';

  for(let property in currentStoryChunk["responses"]) {
    if(currentStoryChunk["responses"].hasOwnProperty(property)) {
      text += '<label><input id="choice-btn" type="radio" name="response" value="' + property + '"/><span>' + currentStoryChunk['responses'][property] + '</span></label>';
    }
  }

  storyContent.innerHTML = currentStoryChunk.content;
  options.innerHTML = text;
}