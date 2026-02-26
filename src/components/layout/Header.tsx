import { useEffect, useState, type FC } from "react";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { darkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      } ${scrolled ? "shadow-md py-3" : "py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Contenedor del Logo y Navegación */}
        <Navbar />

        {/* Acciones: Dark Mode Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            title="Cambiar modo"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;