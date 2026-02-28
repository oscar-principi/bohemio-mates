import type { Product } from "../../data/types/products";
import { ShoppingBag, Plus } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useCart } from "../../context/CartContext";
import { useSnackbar } from "../../context/SnackbarContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { darkMode } = useTheme();
  const { addToCart, cart } = useCart();
  const { showSnackbar } = useSnackbar();

  // Obtenemos la cantidad actual en el carrito
  const cartItem = cart.find((item) => item.id === product.id);
  const quantityInCart = cartItem ? cartItem.quantity : 0;

  const handleAddToCart = () => {
    addToCart(product, 1); // Siempre agregamos de a 1
    showSnackbar(`${product.name} agregado`);
  };

  return (
    <div
      className={`
        relative p-5 flex flex-col gap-4 transition-all duration-300 rounded-sm border
        ${
          darkMode
            ? "bg-black border-neutral-800 text-white hover:border-white"
            : "bg-white border-neutral-200 text-black hover:border-black"
        }
      `}
    >
      {/* Imagen con Badge de cantidad */}
      <div className={`aspect-square flex items-center justify-center overflow-hidden relative ${darkMode ? "bg-neutral-900" : "bg-neutral-50"}`}>
        
        {/* Indicador de cantidad (Se ve donde se selecciona) */}
        {quantityInCart > 0 && (
          <div className="absolute top-0 right-0 bg-black dark:bg-white text-white dark:text-black w-8 h-8 flex items-center justify-center text-xs font-black z-10 shadow-lg">
            {quantityInCart}
          </div>
        )}

        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" 
        />
      </div>

      {/* Info básica */}
      <div className="flex flex-col gap-1">
        <h3 className="text-sm font-bold uppercase tracking-wider truncate">
          {product.name}
        </h3>
        <p className="text-lg font-black">
          ${product.price.toLocaleString()}
        </p>
      </div>

      {/* Botón de Acción Única */}
      <button
        onClick={handleAddToCart}
        className={`
          w-full flex items-center justify-center gap-2 py-4 rounded-none
          font-black uppercase text-[10px] tracking-[0.2em]
          transition-all active:scale-95
          ${
            darkMode
              ? "bg-white text-black hover:bg-neutral-200"
              : "bg-black text-white hover:opacity-90"
          }
        `}
      >
        {quantityInCart > 0 ? <Plus size={14} /> : <ShoppingBag size={14} />}
        {quantityInCart > 0 ? "Añadir otro" : "Agregar al carrito"}
      </button>

      {/* Subtotal discreto si hay más de 1 */}
      {quantityInCart > 1 && (
        <p className="text-[9px] uppercase text-center opacity-40 font-bold tracking-widest">
          Subtotal: ${(product.price * quantityInCart).toLocaleString()}
        </p>
      )}
    </div>
  );
}