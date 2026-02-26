import { useTheme } from "../context/ThemeContext";
import ProductCard from "../components/ui/ProductCard";
import { categoria1 } from "../data/products";
import PageTransition from "../components/layout/PageTransition";

export default function Producto1() {
  const { darkMode } = useTheme();

  return (
    <PageTransition>
      <section
        className={`max-w-6xl mx-auto px-8 py-24 transition-colors duration-300 ${
          darkMode ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        <h1 className="text-5xl font-black mb-16 uppercase">
          Categoría 2
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {categoria1.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </PageTransition>
  );
}