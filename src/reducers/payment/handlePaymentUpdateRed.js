export default function handlePaymentUpdate(state = [], action) {
  switch (action.type) {
    case 'UPDATE_DONE_SUCCESSFULLY':
      return action.response;
    default:
      return state;
  }
}
