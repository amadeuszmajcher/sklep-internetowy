import styles from "./FavouritesProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import BAG_ICON from "../../assets/bag.svg";
import { useFetcher } from "react-router-dom";
import { Price } from "../Price/Price";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function FavouritesProduct({ favourite }) {
  const product = favourite.product;
  const { Form } = useFetcher();
  const price = <Price product={product} />;
  const [, addProductToCart] = useContext(CartContext);
  return (
    <div className={styles.favouriteProduct}>
      <img src={product.photos[0]} />
      <div className={styles.favouriteProductInfo}>
        <div className={styles.topRow}>
          <h3>
            {product.brand} {product.productName}
          </h3>
          <p>{price}</p>
        </div>
        <p>
          <span className={styles.priceRow}>Cena:</span>
          {price}
        </p>
        <div className={styles.buttonRow}>
          <Form
            action={`/delete-from-favourites/${favourite.id}`}
            method="DELETE"
          >
            <button>
              <img src={REMOVE_ICON} />
              Usuń
            </button>
          </Form>
          <button
            onClick={() => {
              addProductToCart(product);
            }}
          >
            <img src={BAG_ICON} />
            Dodaj do koszyka
          </button>
        </div>
      </div>
    </div>
  );
}
