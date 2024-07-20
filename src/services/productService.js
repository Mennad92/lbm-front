function productService() {
    const getProducts = () => {
      return fetch("http://localhost:8000/api/products", {
        type: "GET",
      }).then((res) => res.json());
    };
  
    return {
      getProducts,
    };
  }
  
  export default productService();