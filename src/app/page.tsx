"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.scss";
import ProductCard, { type Product } from "@/components/ProductCard/ProductCard";
import { getProducts } from "@/lib/api/products.api";

export default function HomePage() {
  const [items, setItems] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await getProducts(12);

        if (!alive) return;

        setItems(
          res.products.map((p) => ({
            title: p.title,
            category: p.category,
            price: p.price,
            thumbnail: p.thumbnail,
          })),
        );
      } catch {
        if (alive) setError("Failed to load products. Please try again later.");
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, []);

  return (
    <section>
      <h2 className={styles.heading}>Latest Products</h2>

      {loading ? <div className={styles.state}>Loading...</div> : null}
      {error ? <div className={styles.stateError}>{error}</div> : null}

      {!loading && !error ? (
        <div className={styles.grid}>
          {items.map((p, idx) => (
            <ProductCard key={idx} product={p} />
          ))}
        </div>
      ) : null}
    </section>
  );
}
