const backgroundList = [
  "biome-plain",
  "biome-jungle",
  "biome-snowy-tundra",
  "biome-desert",
  "biome-mushroom-island",
];

const biomeText = [
  "Wide Plains",
  "Big Jungle",
  "Snowy Tundra",
  "Dry Desert",
  "Mushroom Island",
];

let currentBackround = 0;

// Set background image and text for the overworld section.
function nextBackground() {
  currentBackround = (currentBackround + 1) % backgroundList.length;
  const backgroundName = backgroundList[currentBackround];

  const section = document.getElementById("overworld-section");
  section.style.background = `url('assets/${backgroundName}.jpg') center center / cover no-repeat`;

  const text = document.getElementById("biome-text");
  text.innerText = biomeText[currentBackround];
}

function previousBackground() {
  currentBackround = (currentBackround + 4) % backgroundList.length;
  const backgroundName = backgroundList[currentBackround];

  const section = document.getElementById("overworld-section");
  section.style.background = `url('assets/${backgroundName}.jpg') center center / cover no-repeat`;

  const text = document.getElementById("biome-text");
  text.innerText = biomeText[currentBackround];
}

// Go nether animation. Show the nether effect and change the nether background.
function goNether() {
  const transition = document.getElementById("nether-transition");
  const clickText = document.getElementById("nether-click-text");
  const section = document.getElementById("nether-section");
  transition.style.opacity = 1;

  // Wait for the transition to finish
  setTimeout(() => {
    if (clickText.innerText === "Click to enter") {
      clickText.innerText = "Click to leave";
      section.classList.remove("bg-overworld");
      section.classList.add("bg-nether");
    } else {
      clickText.innerText = "Click to enter";
      section.classList.remove("bg-nether");
      section.classList.add("bg-overworld");
    }
  }, 2000);

  setTimeout(() => {
    transition.style.opacity = 0;
  }, 3000);
}
