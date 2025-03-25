import styles from "./Favourites.module.css";
import { FavouritesProduct } from "../FavouritesProducts/FavouritesProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
export function FavouritesList({ products }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {products.map((product) => {
            return <FavouritesProduct key={product.id} product={product} />;
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
