export default function fetchPayments(state = [], action) {
  switch (action.type) {
    case 'FETCH_PAYMENTS_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
