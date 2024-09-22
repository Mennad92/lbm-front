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

  const countVisits = (productId) => {
    return client.get(`count-visits?product_id=${productId}`, 
      { authorization: false }
    );
  };

  return {
    getProducts,
    getProductsByCategory,
    countVisits,
  };
}

export default productService();
