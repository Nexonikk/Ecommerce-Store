import Home from "./home/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
function App() {
  const [authUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/products"
            element={<Products/>}
          />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
