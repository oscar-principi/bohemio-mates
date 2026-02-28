import { useEffect, useState, type FC } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { Sun, Moon, ShoppingBag } from "lucide-react";

const Header: FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { darkMode, toggleTheme } = useTheme();
  const { totalItems } = useCart();

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
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between relative">
        
        {/* Lado Izquierdo: Navbar */}
        <Navbar />

        {/* Lado Derecho: Acciones (Carrito + Tema) */}
        <div className="flex items-center gap-4 ml-4">
          
          {/* 🛒 CARRITO */}
          <NavLink to="/carrito" className="relative flex items-center gap-1 hover:opacity-60 transition-opacity">
            <ShoppingBag size={18} />
            <span className="hidden md:inline text-[11px] font-semibold uppercase tracking-widest">Carrito</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 text-[9px] bg-red-500 text-white rounded-full h-4 w-4 flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </NavLink>

          {/* Botón Tema con hover dinámico */}
          <button
            onClick={toggleTheme}
            className={`
              p-2 rounded-full transition-all duration-300 flex items-center justify-center
              ${
                darkMode 
                  ? "hover:bg-neutral-800 hover:text-yellow-400" 
                  : "hover:bg-black hover:text-white"
              }
            `}
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;