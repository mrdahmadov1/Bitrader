export const updateThemeVariables = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.style.setProperty("--bg-color", "#000");
  } else {
    root.style.setProperty("--bg-color", "#378288");
  }
};
