import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home.tsx";
import Producto1 from "../pages/Categoria1.tsx";
import Producto2 from "../pages/Categoria2.tsx";
import Producto3 from "../pages/Categoria3.tsx";
import Producto4 from "../pages/Categoria4.tsx";
import Personalizados from "../pages/Personalizados.tsx"; 

export default function AppRouter() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/categoria-1" element={<Producto1 />} />
          <Route path="/categoria-2" element={<Producto2 />} />
          <Route path="/categoria-3" element={<Producto3 />} />
          <Route path="/categoria-4" element={<Producto4 />} />
          <Route path="/personalizados" element={<Personalizados />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}