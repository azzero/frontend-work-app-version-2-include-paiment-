export default function monthlyNidaraPayment(state = [], action) {
  switch (action.type) {
    case 'MONTHLY_PAYMENT_NIDARA_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
