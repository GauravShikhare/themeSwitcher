import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";
import AppTheme from "./Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currentTheme = AppTheme[theme];
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: `${currentTheme.backgroundColor}`,
        textColor: `${currentTheme.textColor}`,
        textAlign: "center",
      }}
    >
      <h1>Context API Theme ThemeToggler</h1>
      <p>This is a Paragraph</p>
      <button
        style={{
          backgroundColor: "#26ae60",
          padding: "20px 150px",
          fontSize: "20px",
          border: `${currentTheme.border}`,
        }}
        onClick={() => {
          setThemeMode(themeMode === "light" ? "dark" : "light");
        }}
      >
        Click Me for {themeMode === "light" ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
};

export default HeroSection;
