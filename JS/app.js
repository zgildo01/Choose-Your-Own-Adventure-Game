/*-------------------------------- Constants --------------------------------*/
const letters = /^[A-Za-z]+$/


/*---------------------------- Variables (state) ----------------------------*/
let page = 0;
let playerName = '';

/*------------------------ Cached Element References ------------------------*/
const submitBtn = document.querySelector("#submit-btn");
const chosenName = document.querySelector("#chosen-name");
const playerNameContainer = document.querySelector("#player-name")
const storyContent = document.querySelector("#story-content");
const confirmBtn = document.querySelector("#confirm-btn");
const resetBtn = document.querySelector("#reset-btn");
const options = document.querySelector("#options");
const startBtn = document.querySelector("#start");
const nameQuestion = document.querySelector("#name-question");

/*----------------------------- Event Listeners -----------------------------*/
startBtn.addEventListener('click', gameInit);
submitBtn.addEventListener('click', formHandler);
confirmBtn.addEventListener('click', chooseOption);
resetBtn.addEventListener('click', reset);
options.addEventListener('click', function(evt) {
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
  nameQuestion.setAttribute("hidden", "true");
  renderPlayerName();
}

function renderPlayerName() {
  if(playerName.match(letters) && playerName.length <= 20 && playerName !== ''){
    const playerNameP = document.createElement('p');
    playerNameP.setAttribute("id", "#user-input-name");
    playerNameP.textContent = `Welcome home, ${(playerName).substring(0, 1).toUpperCase()+ (playerName).substring(1)}.`;
    playerNameContainer.appendChild(playerNameP);
    submitBtn.style.display = "none";
    chosenName.style.display = "none";
    startBtn.removeAttribute("hidden");
    storyContent.innerHTML = `Welcome ${playerName}, you will now experience The Engulfment Project; cultists, shriven souls and unholy cosmic entities.`
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
  confirmBtn.setAttribute("hidden", "true");
}

function renderStory(story) {
  let currentStoryChunk = storyChunks[story];
  let text = '';

  for(let property in currentStoryChunk["responses"]) {
    if(currentStoryChunk["responses"].hasOwnProperty(property)) {
      text += '<label><input class="choice-btns" type="radio" name="response" value="' + property + '"/><span>' + currentStoryChunk['responses'][property] + '</span></label>';
    }
  }

  storyContent.innerHTML = currentStoryChunk.content;
  options.innerHTML = text;
}

/*-------------------------------- Story --------------------------------*/

const storyChunks = {
  "begin": {
    "content": `You lay in the infinite void, cold and unfeeling; you've achieved such a level of peace that you have never known before, yet, just as you settle in you hear a faint voice. "${chosenName.value}!" Give in?`,
    "responses": {
      "a": "Ignore the voice",
      "b": "Fight to listen",
      "c": "Begin development",
    }
  },
  //Ending 1, 
  "1_a": {
    "content": "Your soul soon leaves your body, having been engulfed by a world-eating cosmic entity. No sooner did you find out what happened to you while you roamed the conscious world than you gave into the calm embrace of non-existance.",
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