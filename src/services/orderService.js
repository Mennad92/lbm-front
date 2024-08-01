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
        'uuid': orderData.uuid,
        'status': 'WAITING_FOR_PAYMENT',
        'elements': orderData.elements
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
