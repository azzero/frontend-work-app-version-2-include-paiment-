export default function staticsReducer(state = [], action) {
  switch (action.type) {
    case 'TOTAL_ENGAGEMENT_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
