import { useTheme } from "../context/ThemeContext";
import ProductCard from "../components/ui/ProductCard";
import { personalizados } from "../data/products.ts";
import PageTransition from "../components/layout/PageTransition";
import { Paintbrush } from "lucide-react";

export default function Personalizados() {
  const { darkMode } = useTheme();

  return (
    <PageTransition>
      <section
        className={`max-w-7xl mx-auto px-8 py-24 transition-colors duration-300 min-h-screen ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Cabecera Editorial */}
        <div className="flex flex-col mb-20">
          <div className="flex items-center gap-2 mb-4">
            <Paintbrush size={18} className="text-neutral-400" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-400">
              Servicio de Autor
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-8">
            Diseños <br /> Personalizados
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-neutral-500 dark:text-neutral-400 font-light leading-relaxed">
            Creamos piezas únicas grabadas con tu historia. <br />
            Elegí el modelo base y personalizalo a tu medida. 
            <span className="block mt-4 text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              * El precio final se calcula según la cantidad seleccionada.
            </span>
          </p>
        </div>

        {/* Grid de Productos Personalizables */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {personalizados.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Footer de sección informativo */}
        <div className={`mt-24 border-t pt-12 ${darkMode ? "border-neutral-800" : "border-neutral-100"}`}>
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-3">Grabados Láser</h4>
              <p className="text-xs text-neutral-500">Nombres, escudos o logos con precisión milimétrica sobre madera o cuero.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-3">Cincelado Manual</h4>
              <p className="text-xs text-neutral-500">Apliques de alpaca trabajados artesanalmente para un acabado de lujo.</p>
            </div>
            <div>
              <h4 className="font-black uppercase text-xs tracking-widest mb-3">Tiempos de entrega</h4>
              <p className="text-xs text-neutral-500">Al ser trabajos de autor, el tiempo de producción es de 5 a 7 días hábiles.</p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}