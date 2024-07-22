function productService() {
  const getProducts = () => {
    return fetch("http://localhost:8000/api/products", {
      method: "GET",
    }).then((res) => res.json());
  };

  const getProductsByCategory = (categoryId) => {
    return fetch(`http://localhost:8000/api/products?category=${categoryId}`, {
      method: "GET",
    }).then((res) => res.json());
  };

  return {
    getProducts,
    getProductsByCategory,
  };
}

export default productService();
