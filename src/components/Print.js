import React from 'react';
import { Table } from 'semantic-ui-react';
class Example extends React.Component {
  constructor(props) {
    super(props);
    const currentPage = this.props.params.currentPage;
    const postsPerPage = this.props.params.postsPerPage;
    console.log('current', currentPage);
    console.log('postperpage', postsPerPage);
    this.props.recentEngagements();
    this.state = {
      currentPage: currentPage,
      postsPerPage: postsPerPage
    };
  }
  componentDidMount() {
    const menu = document.querySelector('.MenuCustom');
    menu.style.display = 'none';
    window.print();
  }
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const currentPosts = this.props.engagements.slice(
      indexOfFirstPost,
      indexOfLastPost
    );
    return (
      <div>
        <Table celled padded textAlign='center'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>تاريخ تاشيرة</Table.HeaderCell>
              <Table.HeaderCell>رقم التاشيرة</Table.HeaderCell>
              <Table.HeaderCell>المستفيد</Table.HeaderCell>
              <Table.HeaderCell>تفاصيل</Table.HeaderCell>
              <Table.HeaderCell>مبلغ الالتزام</Table.HeaderCell>
              <Table.HeaderCell>التنزيل</Table.HeaderCell>
              <Table.HeaderCell>تاريخ الوارد </Table.HeaderCell>
              <Table.HeaderCell>الوارد عدد</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {currentPosts.map((engagement, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell>{engagement.visaDate}</Table.Cell>
                  <Table.Cell>{engagement.visaNumber}</Table.Cell>
                  <Table.Cell>{engagement.owner}</Table.Cell>
                  <Table.Cell>{engagement.title}</Table.Cell>
                  <Table.Cell>{engagement.prix}</Table.Cell>
                  <Table.Cell>{engagement.tanzil}</Table.Cell>
                  <Table.Cell>{engagement.reception}</Table.Cell>
                  <Table.Cell>{engagement.receptionNumber}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    );
  }
}
export default Example;
