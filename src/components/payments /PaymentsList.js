import React, { Component } from 'react';
import { Button, Table, Message, Icon, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import Paginationn from '../Pagination';
import StaticsPayment from './StaticsPayment';
var notifElement = '';
let message = <div className='infoLabel'></div>;
let response = '';
export default class PaymentsList extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 1, postsPerPage: 7, id: 0 };
    this.messageHandle = this.messageHandle.bind(this);
    this.paginate = this.paginate.bind(this);
  }
  paginate(number) {
    this.setState({ currentPage: number });
  }
  messageHandle(response) {
    // eslint-disable-next-line
    // eslint-disable-next-line
    // eslint-disable-next-line
    if (response == 1) {
      console.log('guess in 1;');

      message = (
        <div className='infoLabel'>
          <Message className='message' positive>
            <Message.Header>تعديل أداء </Message.Header>
            <p>تم تعديل الأداء بنجاح</p>
          </Message>
        </div>
      );
    }
    // eslint-disable-next-line
    if (response == 2) {
      message = (
        <div className='infoLabel'>
          <Message className='message' positive>
            <Message.Header>حدف أداء </Message.Header>
            <p>تم حدف الأداء بنجاح</p>
          </Message>
        </div>
      );
      const messageArea = document.querySelector('.infoLabel');
      messageArea.style.display = 'block';
      messageArea.style.innerHTML = message;
    }
    // eslint-disable-next-line
    if (response == 3) {
      message = (
        <div className='infoLabel'>
          <Message className='message' positive>
            <Message.Header> إضافة أداء </Message.Header>
            <p>تمت إضافة الأداء بنجاح</p>
          </Message>
        </div>
      );
    }
    return;
  }
  componentDidUpdate() {
    this.props.updateNotificationEnd();
    const status = this.props.responseStatus;

    // eslint-disable-next-line
    if (status == -1) {
      notifElement = document.querySelector('.infoLabel');
      setTimeout(() => {
        // message = '';
        notifElement.style.display = 'none';
      }, 3000);
    }

    if ([1, 2, 3].includes(status)) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }
  render() {
    response = this.props.responseStatus || -1;
    const payments = this.props.payments;
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = payments.slice(indexOfFirstPost, indexOfLastPost);
    this.messageHandle(response);
    return (
      <div>
        {message}
        <Table celled padded textAlign='center' size='large' color='olive'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>تاريخ التحويل</Table.HeaderCell>
              <Table.HeaderCell>تاريخ تاشيرة</Table.HeaderCell>
              <Table.HeaderCell>رقم التاشيرة</Table.HeaderCell>
              <Table.HeaderCell>المستفيد</Table.HeaderCell>
              <Table.HeaderCell>الإدارة</Table.HeaderCell>
              <Table.HeaderCell>تفاصيل</Table.HeaderCell>
              <Table.HeaderCell>مبلغ الالتزام</Table.HeaderCell>
              <Table.HeaderCell>التنزيل</Table.HeaderCell>
              <Table.HeaderCell>تاريخ الوارد </Table.HeaderCell>
              <Table.HeaderCell>الوارد عدد</Table.HeaderCell>
              <Table.HeaderCell>أوامر </Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {currentPosts.map((payment, i) => {
              const virementDone = payment.dateVirement
                ? 'positive'
                : 'warning';

              const checkCell =
                // eslint-disable-next-line
                virementDone == 'positive' ? <Icon name='check' /> : '';
              return (
                <Table.Row key={i} className={virementDone}>
                  <Table.Cell singleLine={true}>
                    {checkCell}
                    {payment.dateVirement || '-'}{' '}
                  </Table.Cell>
                  <Table.Cell singleLine={true}>{payment.visaDate}</Table.Cell>
                  <Table.Cell singleLine={true}>
                    {payment.visaNumber}
                  </Table.Cell>
                  <Table.Cell>{payment.owner}</Table.Cell>
                  <Table.Cell>{payment.institution}</Table.Cell>
                  <Table.Cell>{payment.title}</Table.Cell>
                  <Table.Cell singleLine={true}>{payment.prix}</Table.Cell>
                  <Table.Cell singleLine={true}>{payment.tanzil}</Table.Cell>
                  <Table.Cell singleLine={true}>{payment.reception}</Table.Cell>
                  <Table.Cell singleLine={true}>
                    {payment.receptionNumber}
                  </Table.Cell>
                  <Table.Cell>
                    <div className='icons'>
                      <Link to={`/payments/edit/${payment.id}`}>
                        <Button
                          onClick={e => {
                            this.setState({ id: payment.id });
                          }}
                          icon='edit'
                        ></Button>
                      </Link>
                      <Button
                        onClick={e => {
                          const res = window.confirm(
                            'هل حقا تريد حدف  أداء  ' + payment.title
                          );
                          if (res) {
                            this.props.removePayment(payment.id);
                            this.messageHandle(response);
                          } else {
                            e.preventDefault();
                          }
                        }}
                        icon='remove'
                      ></Button>
                    </div>
                  </Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
        <StaticsPayment {...this.props} />
        <Segment>
          <Paginationn
            postsPerPage={this.state.postsPerPage}
            totalPosts={payments.length}
            paginate={e => this.paginate(e)}
            drop={e => this.setState({ postsPerPage: e })}
          />
        </Segment>
        <Segment id='buttonsList' clearing>
          <Link
            to={`/payment/print/${this.state.currentPage}/${this.state.postsPerPage}`}
          >
            <Button basic color='green' content='طبع' />
          </Link>
        </Segment>
      </div>
    );
  }
}
