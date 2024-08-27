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
        'status': 'En attente de paiement',
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
