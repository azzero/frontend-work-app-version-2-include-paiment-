export default function monthlyNidReducer(state = [], action) {
  switch (action.type) {
    case "MONTHLY_ENGAGEMENT_NIDARA_SUCCEDED":
      return action.response;
    default:
      return state;
  }
}
