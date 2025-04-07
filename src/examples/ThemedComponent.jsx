// ThemedComponent.js
import React, { useContext } from "react";
import AppContext from "./../AppContext";

const ThemedComponent = () => {
  const { theme, toggleTheme, language, changeLanguage } = useContext(AppContext);

  const translations = {
    en: { greeting: "Hello", themeLabel: "Theme", languageLabel: "Language" },
    es: { greeting: "Hola", themeLabel: "Tema", languageLabel: "Idioma" },
  };

  const style = {
    padding: "20px",
    margin: "10px",
    backgroundColor: theme === "light" ? "#eee" : "#333",
    color: theme === "light" ? "#000" : "#fff",
  };

  return (
    <div style={style}>
      <h2>{translations[language].greeting}! 👋</h2>
      <button onClick={toggleTheme}>
        {translations[language].themeLabel}: {theme}
      </button>

      <div style={{ marginTop: "10px" }}>
        <label>{translations[language].languageLabel}: </label>
        <select value={language} onChange={(e) => changeLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Español</option>
        </select>
      </div>
    </div>
  );
};

export default ThemedComponent;
