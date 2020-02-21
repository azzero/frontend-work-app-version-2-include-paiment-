import React, { Component } from 'react';
import { Table } from 'semantic-ui-react';

export default class PaymentsList extends Component {
  constructor(props) {
    super(props);
    const currentPage = this.props.params.currentPage;
    const postsPerPage = this.props.params.postsPerPage;
    this.state = {
      currentPage: currentPage,
      postsPerPage: postsPerPage,
      id: 0
    };
  }

  printCall() {
    console.log('print');
    window.print();
  }
  componentDidMount() {
    const menu = document.querySelector('.MenuCustom');
    menu.style.display = 'none';
    window.print();
  }
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.props.payments.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <div>
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
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {currentPosts.map((payment, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{payment.dateVirement || '-'} </Table.Cell>
                  <Table.Cell>{payment.visaDate}</Table.Cell>
                  <Table.Cell>{payment.visaNumber}</Table.Cell>
                  <Table.Cell>{payment.owner}</Table.Cell>
                  <Table.Cell>{payment.institution}</Table.Cell>
                  <Table.Cell>{payment.title}</Table.Cell>
                  <Table.Cell>{payment.prix}</Table.Cell>
                  <Table.Cell>{payment.tanzil}</Table.Cell>
                  <Table.Cell>{payment.reception}</Table.Cell>
                  <Table.Cell>{payment.receptionNumber}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
