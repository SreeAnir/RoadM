// AppProvider.js
import React, { useState } from "react";
import AppContext from "./AppContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// Create a QueryClient instance
const queryClient = new QueryClient();

const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("en");

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const changeLanguage = (lang) => setLanguage(lang);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ theme, toggleTheme, language, changeLanguage }}>
        {children}
      </AppContext.Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default AppProvider;
