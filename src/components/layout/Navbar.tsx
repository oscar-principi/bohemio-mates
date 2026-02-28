import { useState, type FC } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

interface Category {
  name: string;
  path: string;
}

const categories: Category[] = [
  { name: "Categoría 1", path: "/categoria-1" },
  { name: "Categoría 2", path: "/categoria-2" },
  { name: "Categoría 3", path: "/categoria-3" },
  { name: "Categoría 4", path: "/categoria-4" },
  { name: "Personalizados", path: "/personalizados" },
];

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const getLinkClass = ({ isActive }: { isActive: boolean }): string =>
    `transition-opacity hover:opacity-60 ${
      isActive ? "underline underline-offset-8 decoration-1" : ""
    }`;

  return (
    <div className="flex items-center flex-1">
      {/* LOGO */}
      <NavLink to="/" className="font-black tracking-[0.2em] text-lg uppercase mr-10">
        BOHEMIO <span className="hidden md:inline">mates</span>
      </NavLink>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex items-center gap-8 text-[11px] font-semibold uppercase tracking-widest">
        <NavLink to="/" className={getLinkClass}>Home</NavLink>

        <div className="relative group cursor-pointer">
          <div className="flex items-center gap-1 hover:opacity-60 transition-opacity">
            <span>Categorías</span>
            <ChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
          </div>
          <div className="absolute left-0 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-60">
            <div className="min-w-200px rounded-sm py-3 shadow-2xl border bg-white text-black border-neutral-100 dark:bg-neutral-900 dark:text-white dark:border-neutral-800">
              {categories.map((cat) => (
                <NavLink
                  key={cat.name}
                  to={cat.path}
                  className="block px-6 py-2 text-[10px] transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
                >
                  {cat.name}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE TOGGLE (Solo visible en mobile) */}
      <div className="md:hidden ml-auto flex items-center">
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-1">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full flex flex-col p-8 gap-6 md:hidden z-50 bg-white text-black border-b border-neutral-200 dark:bg-black dark:text-white dark:border-neutral-800">
          <NavLink to="/" onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase">Home</NavLink>
          {categories.map((cat) => (
            <NavLink key={cat.name} to={cat.path} onClick={() => setMobileOpen(false)} className="text-sm tracking-widest uppercase opacity-80">
              {cat.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;