const order = {};

// if (order && order.customer && order.customer.address && !order.customer.address.city) {
//   console.log('City is required');
// }

if(order?.customer?.address?.city === undefined){
  console.log('City is required. I know you did not fulfilled it even before beginning to check the "order" element.')
}