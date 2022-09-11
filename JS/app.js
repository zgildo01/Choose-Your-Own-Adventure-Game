/*-------------------------------- Constants --------------------------------*/
const storyChunksA = [
  {
    storyPath: 'a',
    storyPart: 0,
    storySection: "",
  },
  {
    storyPath: 'a',
    storyPart: 1,
    storySection: "",
  },
  {
    storyPath: 'a',
    storyPart: 2,
    storySection: "",
  },
  {
    storyPath: 'a',
    storyPart: 3,
    storySection: "",
  },
];


const storyChunksB = [
  {
    storyPath: 'b',
    storyPart: 0,
    storySection: "",
  },
  {
    storyPath: 'b',
    storyPart: 1,
    storySection: "",
  },
  {
    storyPath: 'b',
    storyPart: 2,
    storySection: "",
  },
];

const storyChunksC = [
  {
    storyPath: 'c',
    storyPart: 0,
    storySection: "",
  },
  {
    storyPath: 'c',
    storyPart: 1,
    storySection: "",
  },
  {
    storyPath: 'c',
    storyPart: 2,
    storySection: "",
  },
];



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
btn1.addEventListener('click', changeStory);


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

function changeStory(evt) {
  storyContent.textContent = "";
  page++;
  
  
}