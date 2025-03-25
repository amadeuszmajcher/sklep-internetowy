import styles from "./FavouritesProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";

export function FavouritesProduct({ product }) {
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{product.pricePLN}</p>
        </div>
        <p>
          <span className={styles.priceRow}>Cena:</span>
          {product.pricePLN}zł
        </p>
        <div className={styles.buttonRow}>
          <button>
            <img src={REMOVE_ICON} />
            Usuń
          </button>
          <button>
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
