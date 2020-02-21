function totalPayment(state = [], action) {
  switch (action.type) {
    case 'TOTAL_PAYMENTS_SUCCEDED':
      return action.total;
    default:
      return state;
  }
}
export default totalPayment;
