import { useTheme } from "../../context/ThemeContext";
import AppButton from "./AppButton";

export function ThemeToggleButton() {
  const { toggleTheme, theme } = useTheme();

  return (
    <AppButton type="light" size="lg" outlined onClick={toggleTheme}> 
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </AppButton>
  );
}
