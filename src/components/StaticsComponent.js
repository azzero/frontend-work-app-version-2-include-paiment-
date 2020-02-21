import React, { Component } from 'react';
import { Segment, Statistic, Dropdown } from 'semantic-ui-react';
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
export default class statics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      monthF: new Date().getMonth() + 1,
      accountTp: 'عام',
      year: new Date().getFullYear()
    };
    this.props.totalEngagement();
    this.props.monthlyEngagementNidara(this.state.monthF, this.state.year);
    this.props.monthlyEngagementDelegSafi(
      this.state.monthF,
      this.state.accountTp,
      this.state.year
    );
    this.props.monthlyEngagementDelgYousoufia(
      this.state.monthF,
      this.state.accountTp,
      this.state.year
    );
    this.handleDropboxChange = this.handleDropboxChange.bind(this);
    this.handleAccountDropboxChange = this.handleAccountDropboxChange.bind(
      this
    );
    this.handleYearsDropboxChange = this.handleYearsDropboxChange.bind(this);
  }

  handleDropboxChange(data, event) {
    this.props.monthlyEngagementNidara(event.value, this.state.year);
    this.props.monthlyEngagementDelegSafi(
      event.value,
      this.state.accountTp,
      this.state.year
    );
    this.props.monthlyEngagementDelgYousoufia(
      event.value,
      this.state.accountTp,
      this.state.year
    );
    this.setState({ monthF: event.value });
  }
  handleAccountDropboxChange(data, event) {
    this.props.monthlyEngagementNidara(this.state.monthF, this.state.year);
    this.props.monthlyEngagementDelegSafi(
      this.state.monthF,
      event.value,
      this.state.year
    );
    this.props.monthlyEngagementDelgYousoufia(
      this.state.monthF,
      event.value,
      this.state.year
    );
    this.setState({ accountTp: event.value });
  }
  handleYearsDropboxChange(data, event) {
    this.props.monthlyEngagementNidara(this.state.monthF, event.value);
    this.props.monthlyEngagementDelegSafi(
      this.state.monthF,
      this.state.accountTp,
      event.value
    );
    this.props.monthlyEngagementDelgYousoufia(
      this.state.monthF,
      this.state.accountTp,
      event.value
    );
    this.setState({ year: event.value });
  }
  render() {
    const totalEngagement = this.props.statics[0] ? this.props.statics[0] : 0;
    const MonthlyEngNid = this.props.monthlyEngNid[0]
      ? this.props.monthlyEngNid[0]
      : 0;
    const MonthlyEngDelegSafi = this.props.monthlyEngDelegSafi[0]
      ? this.props.monthlyEngDelegSafi[0]
      : 0;
    const monthlyDelegYousofia = this.props.monthlyDelegYousofia[0]
      ? this.props.monthlyDelegYousofia[0]
      : 0;
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
        </Segment>
        <Segment>
          <Statistic.Group>
            {totalEngagement ? (
              <StaticsItem statics={totalEngagement.totalEng} special='' />
            ) : (
              <StaticsItem statics={0} special='' />
            )}
            {MonthlyEngNid ? (
              <StaticsItem
                statics={MonthlyEngNid.monthlyEngNid}
                special='نظارة الأوقاف'
              />
            ) : (
              <StaticsItem statics={0} special='نظارة الأوقاف ' />
            )}
            {MonthlyEngDelegSafi ? (
              <StaticsItem
                statics={MonthlyEngDelegSafi.MonthlyEngDelegSafi}
                special='مندوبية آسفي '
              />
            ) : (
              <StaticsItem statics={0} special='مندوبية آسفي ' />
            )}
            {monthlyDelegYousofia ? (
              <StaticsItem
                statics={monthlyDelegYousofia.monthlyEngDelegYousofia}
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
