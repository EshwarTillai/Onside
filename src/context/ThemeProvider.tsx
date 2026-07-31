import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
  import { ThemeContext, type Theme } from "./ThemeContext";
  export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("light");

    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = useCallback(()=> {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    },[])

    const value = useMemo(()=> ({theme,toggleTheme}) ,[theme,toggleTheme])
    return (
      <ThemeContext.Provider value={value}>
        {children}
      </ThemeContext.Provider>
    );
  }