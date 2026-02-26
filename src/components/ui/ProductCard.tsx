import { useState } from "react";
import type { Product } from "../../data/products";
import { ShoppingBag } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(1);
  const { darkMode } = useTheme();

  // Cálculo del precio total dinámico
  const totalPrice = product.price * quantity;

  const phoneNumber = "5491122334455"; 

  const handleSend = () => {
    const message = `
Hola, quiero consultar por el siguiente producto:

*Producto:* ${product.name}
*Precio unitario:* $${product.price}
*Cantidad:* ${quantity}
*Total:* $${totalPrice}

_Descripción:_ ${product.description}
`;
    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className={`
        border-[1px] p-6 flex flex-col gap-4 transition duration-300 rounded
        ${darkMode
          ? "bg-black border-white text-white hover:shadow-xl"
          : "bg-white border-black text-black hover:shadow-xl"}
      `}
    >
      {/* Imagen (Placeholder mejorado) */}
      <div
        className={`
          h-48 flex items-center justify-center rounded overflow-hidden
          ${darkMode ? "bg-neutral-900 border border-neutral-800" : "bg-neutral-100"}
        `}
      >
        <span className="text-xs uppercase tracking-widest opacity-50 font-bold">
            {product.name}
        </span>
      </div>

      {/* Información */}
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-black uppercase tracking-tighter">{product.name}</h3>
        <p className="text-sm opacity-70 line-clamp-2">{product.description}</p>
        
        {/* Precio dinámico con animación simple */}
        <div className="flex flex-col mt-2">
            <span className="text-[10px] uppercase tracking-widest opacity-50">Precio Total</span>
            <span className="text-2xl font-black tracking-tight">
                ${totalPrice.toLocaleString()}
            </span>
        </div>
      </div>

      {/* Acciones */}
      <div className="flex items-center justify-between mt-4 gap-4">
        {/* Input de Cantidad */}
        <div className="flex flex-col gap-1">
            <label className="text-[10px] uppercase font-bold opacity-50">Cant.</label>
            <input
              type="number"
              min={1}
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className={`
                w-16 px-2 py-2 border-[1px] rounded font-bold text-center
                ${darkMode
                  ? "border-white bg-black text-white focus:ring-1 focus:ring-white outline-none"
                  : "border-black bg-white text-black focus:ring-1 focus:ring-black outline-none"}
              `}
            />
        </div>

        {/* Botón */}
        <button
          onClick={handleSend}
          className={`
            flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded font-black uppercase text-[11px] tracking-widest transition-all
            ${darkMode
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-black text-white hover:opacity-80"}
          `}
        >
          <ShoppingBag size={16} />
          Consultar
        </button>
      </div>
    </div>
  );
}