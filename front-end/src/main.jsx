import "./styles/theme.css";
import "./styles/globals.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart } from "./views/Cart/Cart.jsx";
import { Favourites } from "./views/Favourites/Favourites.jsx";
import { Layout } from "./components/Layout/Layout.jsx";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { ProductsLists } from "./views/ProductsLists/ProductsLists.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
import { productLoader } from "./api/productLoader.js";
import { addProductToFavouritesAction } from "./api/addProductToFavouritesAction.js";
import { favouritesLoader } from "./api/favouritesLoader.js";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js";
const router = createBrowserRouter([
  {
    path: "/add-to-favourites/:productId",
    action: addProductToFavouritesAction,
  },
  {
    path: "/delete-from-favourites/:favouriteId",
    action: deleteFavouriteAction,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/koszyk",
        element: <Cart />,
      },
      {
        path: "/ulubione",
        element: <Favourites />,
        loader: favouritesLoader,
      },
      {
        path: "/:gender?",
        element: <MainPage />,
        loader: mainPageLoader,
      },
      {
        path: "/:gender/:category/:subcategory?",
        element: <ProductsLists />,
        loader: productListLoader,
      },
      {
        path: "/:gender/:category/:subcategory/:productId",
        element: <ProductDetails />,
        loader: productLoader,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
