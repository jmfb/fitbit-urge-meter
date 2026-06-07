import document from "document";
import * as fs from "fs";

const STORAGE_FILE = "urge-level.json";

const LEVELS = [
  { name: "NONE", color: "#4CAF50" },
  { name: "LOW", color: "#8BC34A" },
  { name: "MEDIUM", color: "#FFC107" },
  { name: "HIGH", color: "#FF9800" },
  { name: "URGENT", color: "#F44336" },
];

let currentLevel = 0;

function loadLevel() {
  try {
    const data = fs.readFileSync(STORAGE_FILE, "json");
    if (data && typeof data.level === "number") {
      currentLevel = Math.max(0, Math.min(LEVELS.length - 1, data.level));
    }
  } catch (e) {
    currentLevel = 0;
  }
}

function saveLevel() {
  fs.writeFileSync(STORAGE_FILE, { level: currentLevel }, "json");
}

function updateDisplay() {
  const level = LEVELS[currentLevel];

  const levelText = document.getElementById("level-text");
  const levelBar = document.getElementById("level-bar");
  const background = document.getElementById("background");

  levelText.text = level.name;
  levelBar.style.fill = level.color;
  background.style.fill = "#000000";
}

function onUpPress() {
  if (currentLevel < LEVELS.length - 1) {
    currentLevel++;
    saveLevel();
    updateDisplay();
  }
}

function onDownPress() {
  if (currentLevel > 0) {
    currentLevel--;
    saveLevel();
    updateDisplay();
  }
}

// Initialize
loadLevel();
updateDisplay();

// Wire up button events
const upButton = document.getElementById("btn-up");
const downButton = document.getElementById("btn-down");

upButton.addEventListener("click", onUpPress);
downButton.addEventListener("click", onDownPress);
