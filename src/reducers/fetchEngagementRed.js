function fetchEngagementRed(state = [], action) {
  switch (action.type) {
    case 'FETCH_ENGAGEMENT_SUCCEDED':
      return action.response;
    default:
      return state;
  }
}
export default fetchEngagementRed;
