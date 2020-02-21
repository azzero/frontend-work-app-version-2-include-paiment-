import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import engagementReducer from './engagementReducer';
import fetchEngagementRed from './fetchEngagementRed';
import statitcsReducer from './staticsTotalEngagement';
import monthlyEngNid from './monthlyEngagementNidara';
import monthlyDelegSafi from './monthlyEngementDelegSafiRed';
import monthlyDelegYousofia from './monthlyEngagementDelegYouRed';
import fetchPayments from './payment/fetchPaymentsReducer';
import fetchOnePayment from './payment/fetchOnePaymentReducer';
import totalPayment from './payment/totalPaymentsReducer';
import monthlyNidaraPayment from './payment/monthlyNidaraPayRed';
import monthlyPaymentSafi from './payment/monthlySafiReducer';
import handlePaymentUpdate from './payment/handlePaymentUpdateRed';
import monthlyPaymentYousoufia from './payment/monthlyYousoufiaReducer';
// import FilterReducer from './filterReducer';
import { reducer as ReducerForm } from 'redux-form';
const root = combineReducers({
  engagements: engagementReducer,
  routing: routerReducer,
  engagement: fetchEngagementRed,
  statics: statitcsReducer,
  monthlyEngNid,
  monthlyDelegSafi,
  monthlyDelegYousofia,
  payments: fetchPayments,
  payment: fetchOnePayment,
  totalPayment: totalPayment,
  monthlyNidaraPayment: monthlyNidaraPayment,
  monthlyPaymentSafi: monthlyPaymentSafi,
  responseStatus: handlePaymentUpdate,
  monthlyPaymentYousoufia: monthlyPaymentYousoufia,
  form: ReducerForm
});
export default root;
