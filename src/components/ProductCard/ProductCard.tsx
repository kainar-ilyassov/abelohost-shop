import styles from "./ProductCard.module.scss";

export type Product = {
  title: string;
  category: string;
  price: number;
  thumbnail: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img className={styles.image} src={product.thumbnail} alt={product.title} />
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{product.title}</h3>
        <div className={styles.category}>{product.category.toUpperCase()}</div>
        <div className={styles.price}>${product.price}</div>
      </div>
    </article>
  );
}
