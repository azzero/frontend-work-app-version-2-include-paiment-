import React, { Component } from 'react';
import { Input, Segment, Statistic, Dropdown } from 'semantic-ui-react';
import StaticsItem from './StaticsItem';
const accountOptions = [
  { key: '1', value: 'عام', text: 'حساب عام ' },
  { key: '2', value: 'خاص', text: 'الحساب  الخصوصي' }
];
const monthsOptions = [
  {
    key: '1',
    text: 'يناير',
    value: '1'
  },
  {
    key: '2',
    text: 'فبراير',
    value: '2'
  },
  {
    key: '3',
    text: 'مارس',
    value: '3'
  },
  {
    key: '4',
    text: 'أبريل',
    value: '4'
  },
  {
    key: '5',
    text: 'ماي',
    value: '5'
  },
  {
    key: '6',
    text: 'يونيو',
    value: '6'
  },
  {
    key: '7',
    text: 'يوليوز',
    value: '7'
  },
  {
    key: '8',
    text: 'غشت',
    value: '8'
  },
  {
    key: '9',
    text: 'شتنبر',
    value: '9'
  },
  {
    key: '10',
    text: 'أكتوبر',
    value: '10'
  },
  {
    key: '11',
    text: 'نونبر',
    value: '11'
  },
  {
    key: '12',
    text: 'دجنبر',
    value: '12'
  }
];
const institutionsOptions = [
  { value: 'all', text: 'الكل', key: 1 },
  { value: 'نظارة اسفي', text: 'نظارة اسفي', key: 2 },
  { value: 'مندوبية اسفي', text: 'مندوبية اسفي', key: 3 },
  { value: 'مندوبية اليوسفية', text: 'مندوبية اليوسفية', key: 4 }
];
const years = [
  { value: 2018, text: 2018, key: 2018 },
  { value: 2019, text: 2019, key: 2019 },
  { value: 2020, text: 2020, key: 2020 },
  { value: 2021, text: 2021, key: 2021 },
  { value: 2022, text: 2022, key: 2022 },
  { value: 2023, text: 2023, key: 2023 },
  { value: 2024, text: 2024, key: 2024 },
  { value: 2025, text: 2025, key: 2025 },
  { value: 2026, text: 2026, key: 2026 },
  { value: 2027, text: 2027, key: 2027 },
  { value: 2028, text: 2028, key: 2028 },
  { value: 2029, text: 2029, key: 2029 }
];
export default class StaticsPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthF: new Date().getMonth() + 1,
      accountTp: 'عام',
      year: new Date().getFullYear(),
      tanzil: ''
    };
    this.props.totalPayments(this.state.monthF, this.state.year);
    this.props.monthlyPaymentNidara(this.state.monthF, this.state.year);
    this.props.monthlyPaymentDelegSafi(
      this.state.monthF,
      this.state.accountTp,
      this.state.year
    );
    this.props.monthlyPaymentDelgYousoufia(
      this.state.monthF,
      this.state.accountTp,
      this.state.year
    );
    this.handleDropboxChange = this.handleDropboxChange.bind(this);
    this.handleAccountDropboxChange = this.handleAccountDropboxChange.bind(
      this
    );
    this.handleYearsDropboxChange = this.handleYearsDropboxChange.bind(this);
    this.handleInstitutionChange = this.handleInstitutionChange.bind(this);
    this.searchingByTanzil = this.searchingByTanzil.bind(this);
  }

  handleDropboxChange(data, event) {
    this.props.totalPayments(event.value, this.state.year);
    this.props.monthlyPaymentNidara(event.value, this.state.year);
    this.props.monthlyPaymentDelegSafi(
      event.value,
      this.state.accountTp,
      this.state.year
    );
    this.props.monthlyPaymentDelgYousoufia(
      event.value,
      this.state.accountTp,
      this.state.year
    );
    this.setState({ monthF: event.value });
  }

  handleAccountDropboxChange(data, event) {
    this.props.totalPayments(this.state.monthF, this.state.year);
    this.props.monthlyPaymentNidara(this.state.monthF, this.state.year);
    this.props.monthlyPaymentDelegSafi(
      this.state.monthF,
      event.value,
      this.state.year
    );
    this.props.monthlyPaymentDelgYousoufia(
      this.state.monthF,
      event.value,
      this.state.year
    );
    this.setState({ accountTp: event.value });
  }

  handleYearsDropboxChange(data, event) {
    this.props.totalPayments(this.state.monthF, event.value);
    this.props.monthlyPaymentNidara(this.state.monthF, event.value);
    this.props.monthlyPaymentDelegSafi(
      this.state.monthF,
      this.state.accountTp,
      event.value
    );
    this.props.monthlyPaymentDelgYousoufia(
      this.state.monthF,
      this.state.accountTp,
      event.value
    );
    this.setState({ year: event.value });
  }
  handleInstitutionChange(data, e) {
    if (e.value === 'all') {
      this.props.fetchPayments();
    } else {
      const searchBy = 'institution';
      this.props.fetchPayments(e.value, searchBy);
    }
  }
  searchingByTanzil(e, data) {
    const searchBy = 'tanzil';
    if (data.value) {
      this.props.fetchPayments(data.value, searchBy);
    } else {
      this.props.fetchPayments();
    }
  }
  componentWillUpdate(prevprops, newstate) {}
  render() {
    const totalPayment = this.props.totalPayment[0] || 0;
    const MonthlyPayNid = this.props.monthlyPayNid[0] || 0;
    const MonthlyPayDelegSafi = this.props.MonthlyPayDelegSafi[0] || 0;
    const MonthlyPayDelegYousofia = this.props.monthlyPaymentYousoufia[0] || 0;
    return (
      <div>
        <Segment>
          <Dropdown
            placeholder='اختر الشهر'
            search
            selection
            options={monthsOptions}
            onChange={this.handleDropboxChange}
          />
          <Dropdown
            placeholder='اختر السنة'
            search
            selection
            options={years}
            onChange={this.handleYearsDropboxChange}
          />
          <Dropdown
            placeholder='اختر نوع الحساب '
            search
            selection
            options={accountOptions}
            onChange={this.handleAccountDropboxChange}
          />
          <Dropdown
            placeholder='اختر المؤسسة  '
            search
            selection
            options={institutionsOptions}
            onChange={this.handleInstitutionChange}
          />
          <Input
            onChange={this.searchingByTanzil}
            focus
            placeholder='ابحث بالتنزيل المالي...'
            type='Text'
          />
        </Segment>
        <Segment>
          <Statistic.Group>
            {totalPayment ? (
              <StaticsItem statics={totalPayment.totalPayment} special='' />
            ) : (
              <StaticsItem statics={0} special='' />
            )}
            {MonthlyPayNid ? (
              <StaticsItem
                statics={MonthlyPayNid.MonthlyPayNid}
                special='نظارة الأوقاف'
              />
            ) : (
              <StaticsItem statics={0} special='نظارة الأوقاف ' />
            )}
            {MonthlyPayDelegSafi ? (
              <StaticsItem
                statics={MonthlyPayDelegSafi.MonthlyPayDelegSafi}
                special='مندوبية آسفي '
              />
            ) : (
              <StaticsItem statics={0} special='مندوبية آسفي ' />
            )}
            {MonthlyPayDelegYousofia ? (
              <StaticsItem
                statics={MonthlyPayDelegYousofia.monthlyEngDelegYousofia}
                special='مندوبية اليوسفية'
              />
            ) : (
              <StaticsItem statics={0} special='مندوبية اليوسفية' />
            )}
          </Statistic.Group>
        </Segment>
      </div>
    );
  }
}
