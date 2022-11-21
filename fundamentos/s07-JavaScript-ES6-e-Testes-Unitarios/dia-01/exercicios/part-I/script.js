const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  //Complete a função customerInfo() para que seu retorno seja similar a 'Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701'.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const costumerName = order.name;
  const costumerPhone = order.phoneNumber;
  const address =
    order.address.apartment == undefined
      ? `R. ${order.address.street}, Nº: ${order.address.number}`
      : `R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`;

  console.log(
    `Olá ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${costumerPhone}, ${address}`
  );
};

customerInfo(order);


console.log();
const orderModifier = (order) => {
  //Complete a função orderModifier() para que seu retorno seja similar a 'Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00.';
  const newClient = (order['name'] = `LUiz Silva`);
  const orderPizza = Object.keys(order['order']['pizza']);
  const newTotal = (order['payment']['total'] = `50`);
  const sodaType = order['order']['drinks']['coke']['type'];
  
  console.log(`Olá ${newClient}, o total do seu pedido de ${orderPizza} e ${sodaType} é ${newTotal}.`)
};

orderModifier(order);
