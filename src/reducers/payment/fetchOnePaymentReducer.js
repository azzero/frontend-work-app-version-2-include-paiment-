export default function fetchOnePayment(state = [], action) {
  switch (action.type) {
    case 'FETCH_PAYMENT_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
