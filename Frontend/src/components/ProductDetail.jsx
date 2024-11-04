/* eslint-disable no-useless-escape */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";


function ProductDetail() {
    const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getProductsById = async () => {
      try {
        const res = await axios.get("https://api.escuelajs.co/api/v1/products/" + id.slice(1))

        console.log(res.data);
        setProducts(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProductsById();
  }, [id]);


  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-600 hover:text-[#9d3cf8] ">
                Home
              </Link>
              <svg
                className="w-3 h-3 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="flex items-center">
              <Link to="/products" className="text-gray-600 hover:text-[#9d3cf8]" >
                Products
              </Link>
              <svg
                className="w-3 h-3 mx-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <span className="text-[#9d3cf8]">Product Detail</span>
            </li>
          </ol>
        </nav>

        {/* Product Section */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:flex">
          {/* Product Images */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="sticky top-0">
              {/* Main Image */}
              <div className="mb-4 border rounded-lg overflow-hidden">
                <img
                  src={products.images?.[0]
                    ?.replace(/["\[\]]/g, '')}
                  alt="Product"
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Thumbnail Images */}
              <div className="grid grid-cols-4 gap-2">
                <img
                  src={products.images?.[1]
                    ?.replace(/["\[\]]/g, '')}
                  alt="Thumbnail 1"
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
                />
                <img
                  src={products.images?.[2]
                    ?.replace(/["\[\]]/g, '')}
                  alt="Thumbnail 2"
                  className="w-full h-20 object-cover rounded-lg cursor-pointer hover:opacity-75"
                />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{products.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-gray-600">4.5 (250 reviews)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <span className="text-4xl font-bold text-[#9d3cf8]">${products.price}</span>
              <span className="ml-2 text-gray-500 line-through">$129.99</span>
              <span className="ml-2 text-green-500">Save 23%</span>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Description</h2>
              <p className="text-gray-600 leading-relaxed">
                {products.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Key Features</h2>
              <ul className="list-disc list-inside text-gray-600">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </div>

            {/* Order Section */}
            <div className="bg-gray-50 rounded-lg p-6 mb-6">
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Quantity
                </label>
                <select className="w-full border border-gray-300 rounded-md py-2 px-3">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>

              {/* Add to Cart Button */}
              <button className="w-full bg-gray-800 text-white py-3 px-6 rounded-md hover:bg-[#9d3cf8] transition duration-200 mb-2">
                Add to Cart
              </button>

              {/* Buy Now Button */}
              <button className="w-full bg-[#9d3cf8] text-white py-3 px-6 rounded-md hover:bg-[#a65fe9] transition duration-200">
                Buy Now
              </button>
            </div>

            {/* Delivery Info */}
            <div className="border-t pt-6">
              <div className="flex items-center mb-4">
                <svg
                  className="w-6 h-6 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-gray-600">Free Delivery</span>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-blue-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-gray-600">30-Day Return Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;