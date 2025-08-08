document.addEventListener("DOMContentLoaded", function () {
  // Light/Dark theme toggle
  const themeSwitch = document.getElementById("theme-switch");
  const currentTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  if (currentTheme === "dark") {
    themeSwitch.checked = true;
  }

  // Apply initial theme
  document.documentElement.setAttribute("data-theme", currentTheme);

  themeSwitch.addEventListener("change", function () {
    const theme = this.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  });

  // Color theme switcher
  const colorThemeButton = document.getElementById("color-theme-button");
  const colorThemes = ["neutral", "purple", "green", "blue", "golden"];
  let currentColorThemeIndex = 0;

  // Load saved color theme
  const savedColorTheme = localStorage.getItem("color-theme") || "neutral";
  currentColorThemeIndex = colorThemes.indexOf(savedColorTheme);
  if (currentColorThemeIndex === -1) currentColorThemeIndex = 0;

  // Apply initial color theme
  document.documentElement.setAttribute("data-color-theme", colorThemes[currentColorThemeIndex]);

  // Color theme button click handler
  colorThemeButton.addEventListener("click", function () {
    currentColorThemeIndex = (currentColorThemeIndex + 1) % colorThemes.length;
    const newColorTheme = colorThemes[currentColorThemeIndex];

    document.documentElement.setAttribute("data-color-theme", newColorTheme);
    localStorage.setItem("color-theme", newColorTheme);
  });
});
