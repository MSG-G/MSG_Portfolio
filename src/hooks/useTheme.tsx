import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export const useTheme = () => {
  const { theme, setTheme } = useNextTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Retourne "light" pendant l'hydratation pour éviter les flashs
  return {
    theme: mounted ? theme || "light" : "light",
    toggleTheme,
  };
};
