import axios from "axios";

export const getProducts = async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.escuelajs.co/api/v1/products"
    );

    const formattedProducts = response.data.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      images: product.images,
      categoryName: product.category.name,
    }));

    res.status(200).json(formattedProducts);
  } catch (error) {
    console.log("Error: ", error);
    res.status(500).json(error);
  }
};
