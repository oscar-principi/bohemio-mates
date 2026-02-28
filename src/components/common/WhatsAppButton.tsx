import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "5492215747947"; 
  const message = "Hola! Vengo desde la web de Bohemio Mates y quería hacer una consulta.";
  
  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      className="
        fixed bottom-8 right-8 z-100
        p-4 rounded-full shadow-[0_10px_25px_-5px_rgba(16,185,129,0.4)]
        transition-all duration-300
        bg-emerald-500 text-white
        hover:bg-emerald-600 hover:scale-110 active:scale-95 group
      "
    >
      {/* Icono de WhatsApp */}
      <MessageCircle size={28} strokeWidth={2.5} fill="currentColor" fillOpacity={0.1} />

      {/* Tooltip Dinámico */}
      <span className="
        absolute right-full mr-4 top-1/2 -translate-y-1/2 
        px-3 py-1.5 rounded bg-black text-white dark:bg-white dark:text-black
        text-[10px] uppercase tracking-[0.2em] font-black
        opacity-0 group-hover:opacity-100 transition-all duration-300
        pointer-events-none whitespace-nowrap shadow-xl
        translate-x-2 group-hover:translate-x-0
      ">
        Escribinos
      </span>

      {/* Efecto de pulso verde */}
      <span className="absolute inset-0 rounded-full animate-ping opacity-25 bg-emerald-400 -z-10" />
    </button>
  );
}