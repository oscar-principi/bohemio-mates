export default function Footer() {
  return (
    <footer className="py-16 border-t border-neutral-200 dark:border-neutral-800 text-center transition-colors duration-300">
      <div className="flex flex-col items-center gap-6">
        
        {/* Copyright */}
        <p className="text-[10px] uppercase tracking-[0.5em] text-neutral-500 dark:text-neutral-400 mt-4">
          © 2026 BOHEMIO MATES. TODOS LOS DERECHOS RESERVADOS.
        </p>

        {/* Créditos de Desarrollo */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-400 dark:text-neutral-600 font-medium">
            Desarrollado por
          </span>
          
          <a 
            href="https://rocklab.com.ar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group transition-transform hover:scale-105 active:scale-95"
          >
            <div className="text-3xl md:text-2xl font-black tracking-tighter">
              <span className="text-red-600">Rock</span>
              
              {/* ✅ Forzamos text-black para el modo claro y dark:text-zinc-100 para el oscuro */}
              <span className="text-black dark:text-zinc-100 transition-colors duration-300">
                Lab
              </span>
            </div>
            
            <p className="text-[8px] uppercase tracking-[0.3em] text-neutral-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Visitar sitio
            </p>
          </a>
        </div>

      </div>
    </footer>
  );
}