"use client";

import styles from "./ProductCard.module.scss";
import { useAuthStore } from "@/store/auth.store";

export type ProductVM = {
  title: string;
  category: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: ProductVM }) {
  const token = useAuthStore((s) => s.token);

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={product.thumbnail} alt={product.title} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.category}>{product.category.toUpperCase()}</div>
        <div className={styles.price}>${product.price}</div>

        {token ? <button className={styles.addBtn}>Add to cart</button> : null}
      </div>
    </article>
  );
}
