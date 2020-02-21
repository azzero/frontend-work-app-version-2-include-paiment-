export default function monthlyPaymentYousoufia(state = [], action) {
  switch (action.type) {
    case 'MONTHLY_PAYMENT_YOUSOUFIA_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
