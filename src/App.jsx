import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root.jsx";
import Home from "./pages/Home.jsx";
import AllProducts from "./pages/AllProducts.jsx";
import axios from "axios";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        index
        element={<Home />}
        loader={async () => {
          const products = await axios.get("/api/products");
          console.log(products)
          return { products: products.data };
        }}
      />
      <Route path="/browse"
        element={<AllProducts/>}
        loader={async () => {
          const res = await axios.get(`/api/products`)
          return { products: res.data}
        }}
        />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
