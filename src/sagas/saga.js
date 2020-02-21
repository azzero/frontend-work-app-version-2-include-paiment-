import { call, put, takeEvery, all } from 'redux-saga/effects';
import {
  recentEngagements,
  addEngagement,
  fetchEngagement,
  updateEngagement,
  removeEngagement,
  totalEngagement,
  monthlyEngagementnidara,
  monthlyEngagementDelegSafi,
  monthlyEngagementDelegYousoufia,
  addPaymentApi,
  fetchPaymentsApi,
  fetchePaymentApi,
  updatePaymentApi,
  removePaymentApi,
  totalPaymentsApi,
  monthlyPaymentNidara,
  monthlyPaymentsSafiApi,
  monthlyPaymentsYousoufiaApi
} from '../services/api';
import { browserHistory } from 'react-router';
export function* recentEngagementsWorker(feathersApp) {
  const response = yield call(recentEngagements, feathersApp);
  yield put({
    type: 'RECENT_ENGAGEMENT_SUCCEDED',
    payload: response
  });
}
export function* addEngagementWorker(feathersApp, action) {
  yield call(
    addEngagement,
    feathersApp,
    action.receptionNumber,
    action.reception,
    action.tanzil,
    action.prix,
    action.institution,
    action.accountType,
    action.title,
    action.owner,
    action.visaNumber,
    action.visaDate
  );
  yield browserHistory.push('');
}

export function* fetchEngementWorker(app, action) {
  const response = yield call(fetchEngagement, app, action.id);
  yield put({
    type: 'FETCH_ENGAGEMENT_SUCCEDED',
    response
  });
}
export function* updateEngementWorker(app, action) {
  yield call(updateEngagement, app, action.payload);
  browserHistory.push('/');
}
export function* removeEngagementWorker(app, action) {
  yield call(removeEngagement, app, action.id);
  browserHistory.push('/');
}
export function* totalEngagementtWorker(app) {
  const response = yield call(totalEngagement, app);
  yield put({
    type: 'TOTAL_ENGAGEMENT_SUCCEDED',
    response
  });
}
export function* monthlyEngagementNidaraWorker(app, action) {
  const response = yield call(
    monthlyEngagementnidara,
    app,
    action.filter,
    action.yearFilter
  );
  yield put({
    type: 'MONTHLY_ENGAGEMENT_NIDARA_SUCCEDED',
    response
  });
}
export function* monthlyEngagemenDelegSafiWorker(app, action) {
  const result = yield call(
    monthlyEngagementDelegSafi,
    app,
    action.filter,
    action.accountTP,
    action.yearFilter
  );
  // eslint-disable-next-line
  const response = result == undefined ? 0 : result;
  yield put({
    type: 'MONTHLY_ENGAGEMENT_DELEGSAFI_SUCCEDED',
    response
  });
}
export function* monthlyEngagemenDelegYousofiaWorker(app, action) {
  const response = yield call(
    monthlyEngagementDelegYousoufia,
    app,
    action.filter,
    action.accountTP,
    action.yearFilter
  );
  yield put({
    type: 'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_SUCCEDED',
    response
  });
}

//------------- PAYMENT ---------- //

export function* addPaymentWorker(app, action) {
  yield call(
    addPaymentApi,
    app,
    action.receptionNumber,
    action.reception,
    action.tanzil,
    action.prix,
    action.institution,
    action.accountType,
    action.title,
    action.owner,
    action.visaNumber,
    action.visaDate,
    action.dateVirement
  );
  yield put({
    type: 'UPDATE_DONE_SUCCESSFULLY',
    response: 3
  });
  browserHistory.push('/payments');
}
export function* fetchPaymentsWorker(app, action) {
  const response = yield call(fetchPaymentsApi, app, action.payload);
  yield put({
    type: 'FETCH_PAYMENTS_SUCCEDED',
    response
  });
}
export function* fetchPaymentWorker(app, action) {
  const response = yield call(fetchePaymentApi, app, action.id);
  yield put({
    type: 'FETCH_PAYMENT_SUCCEDED',
    response
  });
}
export function* updatePaymentWorker(app, action) {
  yield call(updatePaymentApi, app, action.payload);
  yield put({
    type: 'UPDATE_DONE_SUCCESSFULLY',
    response: 1
  });
  browserHistory.push(`/payments`);
}
export function* removePaymentWorker(app, action) {
  yield call(removePaymentApi, app, action.id);
  yield put({
    type: 'UPDATE_DONE_SUCCESSFULLY',
    response: 2
  });
  browserHistory.push('/payments/');
}
export function* totalPaymentsWorker(app, action) {
  const total = yield call(totalPaymentsApi, app, action.payload);
  yield put({
    type: 'TOTAL_PAYMENTS_SUCCEDED',
    total
  });
}
export function* monthlyPaymentsNidaraWorker(app, action) {
  // TNP= total nidara payment
  const TNP = yield call(monthlyPaymentNidara, app, action.payload);
  yield put({
    type: 'MONTHLY_PAYMENT_NIDARA_SUCCEDED',
    response: TNP
  });
}
function* monthlyPaymentsSafiWorker(app, action) {
  const response = yield call(monthlyPaymentsSafiApi, app, action.payload);
  yield put({
    type: 'MONTHLY_PAYMENT_SAFI_SUCCEDED',
    response
  });
}
function* monthlyPaymentsYousoufiaWorker(app, action) {
  const response = yield call(monthlyPaymentsYousoufiaApi, app, action.payload);
  yield put({
    type: 'MONTHLY_PAYMENT_YOUSOUFIA_SUCCEDED',
    response
  });
}
//--------------------------------//
// ------------- ROOT ---------- //
//-------------------------------//

export default function* root(feathersApp) {
  yield all([
    takeEvery(
      'RECENT_ENGAGEMENT_REQUESTED',
      recentEngagementsWorker,
      feathersApp
    ),
    takeEvery('ADD_ENGAGEMENT_REQUESTED', addEngagementWorker, feathersApp),
    takeEvery('FETCH_ENGAGEMENT_REQUESTED', fetchEngementWorker, feathersApp),
    takeEvery('UPDATE_ENGAGEMENT_REQUESTED', updateEngementWorker, feathersApp),
    takeEvery(
      'REMOVE_ENGAGEMENT_REQUESTED',
      removeEngagementWorker,
      feathersApp
    ),
    takeEvery(
      'TOTAL_ENGAGEMENT_REQUESTED',
      totalEngagementtWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_NIDARA_REQUESTED',
      monthlyEngagementNidaraWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_DELEGSAFI_REQUESTED',
      monthlyEngagemenDelegSafiWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_REQUESTED',
      monthlyEngagemenDelegYousofiaWorker,
      feathersApp
    ),
    takeEvery('FETCH_PAYMENTS_REQUESTED', fetchPaymentsWorker, feathersApp),
    takeEvery('ADD_PAYMENT_REQUESTED', addPaymentWorker, feathersApp),
    takeEvery('FETCH_PAYMENT_REQUESTED', fetchPaymentWorker, feathersApp),
    takeEvery('UPDATE_PAYMENT_REQUESTED', updatePaymentWorker, feathersApp),
    takeEvery('REMOVE_PAYMENT_REQUESTED', removePaymentWorker, feathersApp),
    takeEvery('TOTAL_PAYMENTS_REQUESTED', totalPaymentsWorker, feathersApp),
    takeEvery(
      'MONTHLY_PAYMENT_NIDARA',
      monthlyPaymentsNidaraWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_PAYMENT_SAFI_REQUESTED',
      monthlyPaymentsSafiWorker,
      feathersApp
    ),
    takeEvery(
      'MONTHLY_PAYMENT_YOUSOUFIA_REQUESTED',
      monthlyPaymentsYousoufiaWorker,
      feathersApp
    )
  ]);
}
