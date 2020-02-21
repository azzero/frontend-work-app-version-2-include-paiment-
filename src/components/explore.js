import React, { Component } from 'react';
import { Table, Button, Segment } from 'semantic-ui-react';
import { Link } from 'react-router';
import Paginationn from './Pagination';
class Explore extends Component {
  constructor(props) {
    super(props);
    this.props.recentEngagements();
    this.state = {
      currentPage: 1,
      postsPerPage: 5
    };
    this.paginate = this.paginate.bind(this);
  }
  paginate(number) {
    this.setState({ currentPage: number });
    console.log('current', this.state.currentPage);
  }
  render() {
    const engagements = this.props.engagements;
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

        <Paginationn
          postsPerPage={this.state.postsPerPage}
          totalPosts={engagements.length}
          paginate={e => this.paginate(e)}
          drop={e => this.setState({ postsPerPage: e })}
        />
        <Segment clearning>
          <Link to='/'>
            <Button labelPosition='left' icon='left chevron' content='Back' />
          </Link>
          <Link
            to={`/engagement/print/${this.state.currentPage}/${this.state.postsPerPage}`}
          >
            <Button labelPosition='right' icon='' content='print' />
          </Link>
        </Segment>
      </div>
    );
  }
}

export default Explore;
