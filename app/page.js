import ProductGrid from "@/components/ProductGrid";
import { products, categories } from "@/data/products";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>Beautiful things for your home</h1>
        <p>Homeware, glassware and more. Add to cart and order straight on WhatsApp.</p>
      </section>
      <ProductGrid products={products} categories={categories} />
    </>
  );
}
