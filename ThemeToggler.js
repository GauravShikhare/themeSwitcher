import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);

  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
    >
      <p> Theme Changer</p>
    </div>
  );
};

export default ThemeToggler;
