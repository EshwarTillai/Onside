import { useEffect, useState, type ReactNode } from "react";
  import { ThemeContext, type Theme } from "./ThemeContext";
  export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    function toggleTheme() {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }