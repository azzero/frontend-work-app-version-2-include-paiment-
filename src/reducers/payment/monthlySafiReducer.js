export default function monthlyPaymentSafi(state = [], action) {
  switch (action.type) {
    case 'MONTHLY_PAYMENT_SAFI_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
