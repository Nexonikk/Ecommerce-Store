import  { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";




function Products() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        // https://api.escuelajs.co/api/v1/products
        const res = await axios.get("https://ecommerce-store-9epl.onrender.com/products");

        console.log(res.data);
        setProducts(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">        
        <div className="mx-16 mt-12 flex flex-wrap">
        {products?.map((item) => (
            <Link key={item.id} to={`/products/:${item.id}`}>
            <Cards key={item.id} item={item}  />
            </Link>
))}
        </div>
      </div>
    </>
  );
}

export default Products;
