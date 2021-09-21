// Initialize DOM Elements

const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const solarizeButton = document.getElementById("solarize");
const body = document.body;

// Cache theme selection for reloading

const theme = localStorage.getItem("theme");
const isSolarized = localStorage.getItem("isSolarized");

if (theme) {
  body.classList.add(theme);
  isSolarized && body.classList.add("solarize");
}

// EVENT HANDLERS FOR THEMES

darkButton.addEventListener("click", () => {
  body.classList.replace("light", "dark");
  localStorage.setItem("theme", "dark");
});

lightButton.addEventListener("click", () => {
  body.classList.replace("dark", "light");
  localStorage.setItem("theme", "light");
});

solarizeButton.addEventListener("click", () => {
  if (body.classList.contains("solarize")) {
    body.classList.remove("solarize");
    solarizeButton.style.cssText = `--bg-solar: var(--yellow);`;

    solarizeButton.innerText = "solarize";
    localStorage.removeItem("isSolarized");
  } else {
    body.classList.add("solarize");
    solarizeButton.style.cssText = `--bg-solar: white);`;

    solarizeButton.innerText = "normalize";
    localStorage.setItem("isSolarized", "true");
  }
});
