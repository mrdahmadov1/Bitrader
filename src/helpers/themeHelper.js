export const updateThemeVariables = (theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.style.setProperty("--body-color", "#00150F");
    root.style.setProperty("--text-color", "rgb(255,255,255,0.6)");
    root.style.setProperty("--title-color", "#FFFFFF");
    root.style.setProperty("--secondary-color", "#00D094");
    root.style.setProperty("--social-border-color-2", "rgb(255,255,255,0.08)");
    root.style.setProperty("--wh-color", "#1B2D29");
    root.style.setProperty("--tertiary-color", "#002A1E");
    root.style.setProperty("--partner-color", "#003E2C");
    root.style.setProperty("--floating-content-bg-color", "rgba(63,81,75,0.8)");
  } else {
    root.style.setProperty("--body-color", "#FFFFFF");
    root.style.setProperty("--text-color", "#6B777F");
    root.style.setProperty("--title-color", "#0C263A");
    root.style.setProperty("--secondary-color", "#0A4FD5");
    root.style.setProperty("--social-border-color-2", "#ECEFF2");
    root.style.setProperty("--wh-color", "#ffffff");
    root.style.setProperty("--tertiary-color", "#E0FAF2");
    root.style.setProperty("--partner-color", "#EDF2F8");
    root.style.setProperty(
      "--floating-content-bg-color",
      "rgba(255,255,255,0.9)"
    );
  }
};
