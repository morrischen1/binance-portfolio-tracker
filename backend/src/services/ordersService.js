exports.processOrders = async (orders) => {
    
    return orders.map(order => ({
      id: order.symbol,
      price: order.price,
      amount: order.quantity,
    }));
};

  