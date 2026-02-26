import { Link } from "react-router-dom";
import PageTransition from "../components/layout/PageTransition";
import heroVideo from "../assets/Hero.mp4";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <PageTransition>
      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40 z-0" />

        <div className="relative z-10 h-full flex flex-col justify-center max-w-7xl mx-auto px-6 md:px-12 text-white">
          <h1 className="text-6xl md:text-[10rem] font-black uppercase tracking-tighter leading-[0.8] mb-6">
            Mates y mas
          </h1>

          <p className="max-w-xl text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
            Mates con diseño y personalizados. <br />
            Piezas que fusionan <span className="italic font-medium text-white">tradición y diseño contemporáneo.</span>
          </p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              to="/categoria-1"
              className="flex items-center gap-3 bg-white text-black px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-neutral-200 transition"
            >
              Ver Catálogo
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/personalizados"
              className="border border-white/40 backdrop-blur-sm px-8 py-4 font-bold uppercase text-xs tracking-widest hover:bg-white hover:text-black transition"
            >
              Diseños Personalizados
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white animate-bounce opacity-30">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* 2. MANIFESTO SECTION */}
      <section className="py-40 px-6 bg-white dark:bg-black transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-neutral-400 dark:text-neutral-500 mb-8 block font-semibold">
            Esencia Bohemio
          </span>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight text-black dark:text-white">
            "No es solo un objeto, es el compañero de tus mejores ideas. <br /> Curamos cada detalle para elevar tu momento."
          </h2>
        </div>
      </section>

      {/* 3. FEATURED GRID */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="aspect-4/5 bg-neutral-100 dark:bg-neutral-900 overflow-hidden relative group border border-neutral-200 dark:border-neutral-800">
             <div className="absolute inset-0 flex items-center justify-center text-white uppercase tracking-widest text-[10px] opacity-0 group-hover:opacity-100 transition-opacity z-10 bg-black/40 backdrop-blur-sm">
                Explorar Colección Imperial
             </div>
             <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100" />
          </div>

          <div className="space-y-10">
            <h3 className="text-5xl md:text-6xl font-black uppercase tracking-tighter leading-none text-black dark:text-white">
              Línea <br /> Premium
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-md text-lg font-light">
              Calabazas seleccionadas, virolas de alpaca cinceladas a mano y cueros legítimos. Cada mate es irrepetible.
            </p>
            
            <div className="space-y-5">
                <div className="flex items-center gap-4 group">
                    <div className="h-1px w-8 bg-black dark:bg-white transition-all group-hover:w-12" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 dark:text-neutral-400">Tallado a mano</span>
                </div>
                <div className="flex items-center gap-4 group">
                    <div className="h-1px w-8 bg-black dark:bg-white transition-all group-hover:w-12" />
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500 dark:text-neutral-400">Cuero Vacuno de exportación</span>
                </div>
            </div>

            <Link 
              to="/categoria-2" 
              className="inline-block border-b border-black dark:border-white pb-2 mt-4 font-bold uppercase text-[10px] tracking-[0.3em] hover:opacity-50 transition-all"
            >
              Descubrir la colección
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}