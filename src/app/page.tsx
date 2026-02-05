import ProductCard, { type Product } from "@/components/ProductCard/ProductCard";
import styles from "./page.module.scss";

const mockProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  title: `Product ${i + 1} Name`,
  category: "beauty",
  price: 9.99,
  thumbnail: "https://placehold.co/300x300",
}));

export default function HomePage() {
  return (
    <section>
      <h2 className={styles.heading}>Latest Products</h2>

      <div className={styles.grid}>
        {mockProducts.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
      </div>
    </section>
  );
}
