import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import WhatsAppButton from "../../components/common/WhatsAppButton"; 
import { useTheme } from "../../context/ThemeContext";

export default function Layout() {
  const { darkMode } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? "bg-black text-white" : "bg-white text-black"
    }`}>
      <Header />
      
      <main className="pt-16">
        <Outlet />
      </main>

      <Footer />

      <WhatsAppButton />
    </div>
  );
}