export default function monthlyEngagementDelegSafiRed(state = [], action) {
  switch (action.type) {
    case "MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_SUCCEDED":
      return action.response;
    default:
      return state;
  }
}
