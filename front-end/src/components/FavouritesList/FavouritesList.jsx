import styles from "./Favourites.module.css";
import { FavouritesProduct } from "../FavouritesProducts/FavouritesProduct";
import { CenteredContent } from "../CenteredContent/CenteredContent";
export function FavouritesList({ favourites }) {
  return (
    <CenteredContent>
      <div className={styles.favouritesList}>
        <h2>Ulubione</h2>
        <div>
          {favourites.map((favourite) => {
            return (
              <FavouritesProduct key={favourite.id} favourite={favourite} />
            );
          })}
        </div>
      </div>
    </CenteredContent>
  );
}
