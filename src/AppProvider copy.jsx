// AppProvider.js
import React, { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en"); // 'en' or 'es'

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <AppContext.Provider value={{ theme, toggleTheme, language, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
