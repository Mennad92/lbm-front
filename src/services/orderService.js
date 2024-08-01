import { client } from "./axiosClient";

function orderService() {

  const getOrders = () => {
    return client.get('orders/',
      { authorization: true }
    );
  };

  const createOrder = (orderData) => {
    return client.post('orders/',
      {
        orderData
      },
      { authorization: true }
    );
  };

  return {
    getOrders,
    createOrder,
  };
}

export default orderService();
