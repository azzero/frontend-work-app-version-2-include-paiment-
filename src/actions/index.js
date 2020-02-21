export function recentEngagements() {
  return {
    type: 'RECENT_ENGAGEMENT_REQUESTED'
  };
}
export function fetchEngagement(id) {
  return {
    type: 'FETCH_ENGAGEMENT_REQUESTED',
    id
  };
}
export function AddEngagementLigne(
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate
) {
  return {
    type: 'ADD_ENGAGEMENT_REQUESTED',
    receptionNumber,
    reception,
    tanzil,
    prix,
    institution,
    accountType,
    title,
    owner,
    visaNumber,
    visaDate
  };
}
export function updateEngagement(
  id,
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate
) {
  return {
    type: 'UPDATE_ENGAGEMENT_REQUESTED',
    payload: {
      id,
      receptionNumber,
      reception,
      tanzil,
      prix,
      institution,
      accountType,
      title,
      owner,
      visaNumber,
      visaDate
    }
  };
}
export function removeEngagement(id) {
  return {
    type: 'REMOVE_ENGAGEMENT_REQUESTED',
    id
  };
}
export function totalEngagement() {
  return {
    type: 'TOTAL_ENGAGEMENT_REQUESTED'
  };
}
export function monthlyEngagementNidara(filter, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_NIDARA_REQUESTED',
    filter,
    yearFilter
  };
}
export function monthlyEngagementDelegSafi(filter, accountTP, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_DELEGSAFI_REQUESTED',
    filter,
    accountTP,
    yearFilter
  };
}
export function monthlyEngagementDelgYousoufia(filter, accountTP, yearFilter) {
  return {
    type: 'MONTHLY_ENGAGEMENT_DELEGYOUSOFIA_REQUESTED',
    filter,
    accountTP,
    yearFilter
  };
}
// ----------------------//
// ------ PAYMENT ------//
// --------------------//

export function addPaymentLigne(
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate,
  dateVirement
) {
  console.log('recp number ', receptionNumber);
  return {
    type: 'ADD_PAYMENT_REQUESTED',
    receptionNumber,
    reception,
    tanzil,
    prix,
    institution,
    accountType,
    title,
    owner,
    visaNumber,
    visaDate,
    dateVirement
  };
}
export function fetchPayments(FilterKeyword = '', searchBy) {
  return {
    type: 'FETCH_PAYMENTS_REQUESTED',
    payload: { FilterKeyword, searchBy }
  };
}
export function fetchPayment(id) {
  return {
    type: 'FETCH_PAYMENT_REQUESTED',
    id
  };
}
export function updatePayment(
  id,
  receptionNumber,
  reception,
  tanzil,
  prix,
  institution,
  accountType,
  title,
  owner,
  visaNumber,
  visaDate,
  dateVirement
) {
  return {
    type: 'UPDATE_PAYMENT_REQUESTED',
    payload: {
      id,
      receptionNumber,
      reception,
      tanzil,
      prix,
      institution,
      accountType,
      title,
      owner,
      visaNumber,
      visaDate,
      dateVirement
    }
  };
}
export function removePayment(id) {
  return {
    type: 'REMOVE_PAYMENT_REQUESTED',
    id
  };
}
// ----------------------//
// ------ PAYMENT STATISTICS ------//
// --------------------//
export function totalPayments(monthf, year) {
  return {
    type: 'TOTAL_PAYMENTS_REQUESTED',
    payload: {
      monthf,
      year
    }
  };
}
export function monthlyPaymentNidara(month, year) {
  return {
    type: 'MONTHLY_PAYMENT_NIDARA',
    payload: { month, year }
  };
}
export function monthlyPaymentDelegSafi(month, accountTp, year) {
  return {
    type: 'MONTHLY_PAYMENT_SAFI_REQUESTED',
    payload: {
      month,
      accountTp,
      year
    }
  };
}
export function monthlyPaymentDelgYousoufia(month, accountTp, year) {
  return {
    type: 'MONTHLY_PAYMENT_YOUSOUFIA_REQUESTED',
    payload: {
      month,
      year,
      accountTp
    }
  };
}
export function updateNotificationEnd() {
  return {
    type: 'UPDATE_DONE_SUCCESSFULLY',
    response: -1
  };
}
