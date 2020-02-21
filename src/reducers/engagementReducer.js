function engagementReducer(state = [], action) {
  switch (action.type) {
    case 'RECENT_ENGAGEMENT_SUCCEDED':
      return action.payload;
    default:
      return state;
  }
}
export default engagementReducer;
