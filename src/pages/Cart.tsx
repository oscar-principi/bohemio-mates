import { useCart } from "../context/CartContext";
import { Trash, Plus, Minus } from "lucide-react"; 
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
    clearCart,
  } = useCart();

  const { darkMode } = useTheme();

  const phoneNumber = "5492215747947";

  const handleCheckout = () => {
    const orderLines = cart
      .map(
        (item) =>
          `• ${item.name}
  Cantidad: ${item.quantity}
  Precio unitario: $${item.price.toLocaleString()}
  Subtotal: $${(item.price * item.quantity).toLocaleString()}`
      )
      .join("\n\n");

    const message = `
Hola! Quiero realizar la siguiente compra:

${orderLines}

-----------------------------
Total del pedido: $${totalPrice.toLocaleString()}
-----------------------------

Gracias!
`;

    const encoded = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encoded}`;

    window.open(url, "_blank");
  };

if (cart.length === 0) {
  return (
    <div className="p-20 text-center flex flex-col items-center gap-4">
      <p className="opacity-50 uppercase tracking-widest text-sm">
        El carrito está vacío
      </p>

      <Link
        to="/"
        replace
        className="underline text-xs uppercase tracking-tighter hover:opacity-50 transition-opacity"
      >
        Volver a la tienda
      </Link>
    </div>
  );
}

  return (
    <div className="max-w-5xl mx-auto p-6 md:p-10 flex flex-col gap-8 mt-20">
      <h1 className="text-3xl font-black uppercase tracking-tighter">Tu Carrito</h1>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between border p-4 rounded-sm transition-colors ${
              darkMode ? "border-neutral-800 bg-neutral-900/50" : "border-neutral-200 bg-white"
            }`}
          >
            {/* IZQUIERDA: Imagen + info */}
            <div className="flex items-center gap-4">
              <div
                className={`w-20 h-20 rounded-sm overflow-hidden flex items-center justify-center ${
                  darkMode ? "bg-black border border-neutral-800" : "bg-neutral-100"
                }`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-[10px] opacity-50 text-center px-1">Sin imagen</span>
                )}
              </div>

              <div>
                <h3 className="font-bold uppercase text-xs md:text-sm tracking-wide">{item.name}</h3>
                <p className="text-[10px] md:text-xs opacity-60 mt-1">
                  ${item.price.toLocaleString()} c/u
                </p>
                <p className="text-[10px] font-black mt-2 uppercase tracking-widest">
                  Subtotal: ${(item.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>

            {/* DERECHA: Acciones (Selector + y -) */}
            <div className="flex items-center gap-4 md:gap-8">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[8px] uppercase opacity-40 font-black tracking-widest">Cantidad</span>
                
                <div className={`flex items-center border rounded-sm overflow-hidden ${
                  darkMode ? "border-neutral-700" : "border-neutral-300"
                }`}>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  
                  <span className="w-8 text-center text-xs font-bold">
                    {item.quantity}
                  </span>

                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="cursor-pointer opacity-30 hover:opacity-100 transition-opacity p-2"
                title="Eliminar del carrito"
              >
                <Trash size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL + ACCIONES */}
      <div className={`mt-4 p-6 border-t ${darkMode ? "border-neutral-800" : "border-neutral-100"}`}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 font-bold">Total del pedido</span>
            <span className="text-3xl font-black">
              ${totalPrice.toLocaleString()}
            </span>
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={clearCart}
              className={`
                flex-1 md:flex-none px-6 py-4 rounded-sm font-bold uppercase text-[10px] tracking-widest transition-all
                ${
                  darkMode
                    ? "bg-neutral-900 text-neutral-400 hover:bg-neutral-800"
                    : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
                }
              `}
            >
              Vaciar
            </button>

            <button
              onClick={handleCheckout}
              className={`
                flex-2 md:flex-none px-10 py-4 rounded-sm font-bold uppercase text-[10px] tracking-[0.2em] transition-all
                ${
                  darkMode
                    ? "bg-white text-black hover:bg-neutral-200"
                    : "bg-black text-white hover:opacity-80"
                }
              `}
            >
              Finalizar Pedido
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}