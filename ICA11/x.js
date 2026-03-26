const customName = document.getElementById("custom-name");
const generateBtn = document.querySelector(".generate");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}
const characters = ["Yo mama", "Donald Trump", "Judy Hopps"];
const places = ["a jungle full of Vietcong pit traps", "the GTA high heel club", "the Chinese-style open-stalled squat toilets"];
const events = [
  "bonesmashed their jawline with an industrial hammer",
  "called in backup",
  "curled their upper lip and snarled",
];

function returnRandomStoryString() {
  const randomCharacter = randomValueFromArray(characters);
  const randomPlace = randomValueFromArray(places);
  const randomEvent = randomValueFromArray(events);

  let storyText = ` ${randomCharacter} went for a drive and suddenly stumbled upon ${randomPlace}. Watching from the window, they ${randomEvent}. Bob crawled out on their hands and knees from the scene and ${randomCharacter} blushed.`;

  return storyText;
}

generateBtn.addEventListener("click", generateStory);

function generateStory() {
  let newStory = returnRandomStoryString();

  if (customName.value !== "") {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 / 14)} stone`;
    const temperature = `${Math.round((94 - 32) * (5 / 9))} Celsius`;
    newStory = newStory.replace("300 pounds", weight);
    newStory = newStory.replace("94 Fahrenheit", temperature);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}