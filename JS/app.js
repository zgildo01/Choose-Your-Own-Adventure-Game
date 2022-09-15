/*-------------------------------- Constants --------------------------------*/
const letters = /^[A-Za-z]+$/;


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
const options = document.querySelector("#options"); // replace with choice-btns eventually, this selects the div rather than the buttons
const startBtn = document.querySelector("#start");
const nameQuestion = document.querySelector("#name-question");
const audio = document.querySelector("audio");

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
  audio.volume = .0125;
  audio.play();
  playerName = chosenName.value;
  nameQuestion.setAttribute("hidden", "true");
  renderPlayerName();
}

function renderPlayerName() {
  if(playerName.match(letters) && playerName.length <= 20 && playerName !== ''){
    const playerNameP = document.createElement('p');
    playerNameP.setAttribute("id", "#user-input-name");
    playerNameP.textContent = `Welcome home, ${(playerName).substring(0, 1).toUpperCase() + (playerName).substring(1)}.`;
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
      text += `<label><input class="choice-btns" type="radio" name="response" value="` + property + `"/><span>` + currentStoryChunk["responses"][property] + `</span></label>`;
    }
  }

  storyContent.innerHTML = currentStoryChunk.content;
  options.innerHTML = text;
}

/*-------------------------------- Story --------------------------------*/

let storyChunks = {
  "begin": {
    "content": `You lay in the infinite void, yet you feel warm and happy; you've achieved such a level of peace that you have never known before, yet, just as you settle in you hear a faint voice. "${chosenName.value}! Are you there? It's dispatch, ${chosenName.value}."`,
    "responses": {
      "a": "Ignore the voice", 
      "b": "Regain consciousness and respond"
    }
  },
  
  "1_a": {
    "content": "Your physical body begins to crumble into ash, yet you feel nothing. You are not conscious of the physical world, as your eyes close all you see is a never-ending dream engulfing you.",
  },

  
  "1_b": {
    "content": `You let out a sharp exhale and open your eyes, as light pours into your tired eyes you look around the room and notice people laying all around you. The room has been swallowed by flames, you have to get out. A voice startles you as it exclaims again: "${chosenName.value}? Come in, do you read?". It appears somehow your walkie talkie wasn't broken in the confusion.`,
    "responses": {
      "a": "Respond to the walkie-talkie informing them of your current state", 
      "b": "Examine one of the bodies", 
      "c": "Try to find an exit", 
    }
  },
  "2_a": {
    "content": `"${chosenName.value}! You're alive! The team thought we had lost you, listen, you're in a rough spot. Those psychos took you into their little "ascendance", they've taken a couple in your team, check to see if they're alright"`,
    "responses": {
      "a": "Doesn't look good, dispatch..", 
      "b": "I'm not even sure they're here.", 
    }
  },
  
  "3_a": {
    "content": `Dispatch doesn't respond, so you scan the room around you. Fortunately, you find a shovel amidst all the rubble and chaos. You're able to then unbarricade the door in front of you. You stumble out of the door and up the stairs only to find the same visage, mayhem everywhere. As you exit the premise the moon looks different, in fact, the whole sky looks different. It all feels surreal, like a dream..`, 
  },
  
  "3_b": {
    "content": `"${chosenName.value}, just hang tight. We'll send a search party for you, thankfully they made it out!" As these words echoed out into the flaming room around you, a heavy drowsiness overtakes you; a never-ending dream begins to engulf you.`,
  },
  "2_b": {
    "content": `As you approach one of the bodies you notice it lays there with its eyes open. Almost as if it were in a conscious state, yet it's not breathing. You attempt to check for a heartbeat and the arm begins to crumble as if it were dust.`,
    "responses": {
      "c": "Inform dispatch of what you've just seen", 
      "d": "Find an exit" 
    }
  },
  "3_c": {
    "content": `The radio emits garbled noises, clearly your luck ran out. As you sit back down in your panic and flooding thoughts your eyes begin to get heavy. The drowsiness begins to overwhelm you and before you know it the fire is gone, it's all gone. You're trapped in a dream, but still conscious... to be continued`
  },


  "3_d": {
    "content": `As you examine your surroundings you notice you're underground, the way out has been completely barricaded. The flames begin to spread around you and move in unnatural ways, before you know it, your eyes begin to close again. The voice coming from the walkie talkie grows quieter and quieter, you're soon trapped in a never-ending dream.`,
  },


  "2_c": {
    "content": `As you examine your surroundings you notice you're underground, the way out has been completely barricaded. The flames begin to spread around you and move in unnatural ways, before you know it, your eyes begin to close again. The voice coming from the walkie talkie grows quieter and quieter, you're soon trapped in a never-ending dream.`,
  },

}