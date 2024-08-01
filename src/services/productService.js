import { client } from "./axiosClient";

function productService() {

  const getProducts = () => {
    return client.get('products/',
      { authorization: false }
    );
  };

  const getProductsByCategory = (categoryId) => {
    return client.get('products?category=' + categoryId,
      { authorization: false }
    );
  };

  return {
    getProducts,
    getProductsByCategory,
  };
}

export default productService();
