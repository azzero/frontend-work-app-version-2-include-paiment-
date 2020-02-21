import React, { Component } from 'react';
import { Table, Button, Segment, Popup } from 'semantic-ui-react';
import { Link } from 'react-router';
import Paginationn from './Pagination';
import StaticsComponent from './StaticsComponent';
class EngagementList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      postsPerPage: 7,
      activeItem: 'home'
    };
    this.paginate = this.paginate.bind(this);
  }
  paginate(number) {
    this.setState({ currentPage: number });
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
        <Table celled striped textAlign='center' size='large' color='olive'>
          <Table.Header>
            <Table.Row>
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
            {currentPosts.map((engagement, i) => {
              return (
                <Table.Row key={i}>
                  <Table.Cell singleLine={true}>
                    {engagement.visaDate}
                  </Table.Cell>
                  <Table.Cell singleLine={true}>
                    {engagement.visaNumber}
                  </Table.Cell>
                  <Table.Cell>{engagement.owner}</Table.Cell>
                  <Table.Cell>{engagement.institution}</Table.Cell>
                  <Table.Cell>{engagement.title}</Table.Cell>
                  <Table.Cell singleLine={true}>{engagement.prix}</Table.Cell>
                  <Table.Cell singleLine={true}>{engagement.tanzil}</Table.Cell>
                  <Table.Cell singleLine={true}>
                    {engagement.reception}
                  </Table.Cell>
                  <Table.Cell>{engagement.receptionNumber}</Table.Cell>
                  <Table.Cell>
                    <div className='icons'>
                      <Link to={`/engagements/edit/${engagement.id}`}>
                        <Popup
                          content='تعديل الإلتزام'
                          trigger={
                            <Button
                              className='iconItem'
                              onClick={e => {
                                this.setState({ id: engagement.id }, () => {
                                  this.props.fetchEngagement(this.state.id);
                                });
                              }}
                              icon='edit'
                            ></Button>
                          }
                        />
                      </Link>
                      <Popup
                        content='حدف الإلتزام'
                        trigger={
                          <Button
                            className='iconItem'
                            onClick={e => {
                              const res = window.confirm(
                                'هل حقا تريد حدف الالتزام دو التأشيرة عدد ' +
                                  engagement.visaNumber
                              );
                              if (res) {
                                this.props.removeEngagement(engagement.id);
                              } else {
                                e.preventDefault();
                              }
                            }}
                            icon='remove'
                          ></Button>
                        }
                      />
                      <Link to={`/payments/add/${engagement.id}`}>
                        <Popup
                          content='القيام بالأداء'
                          trigger={
                            <Button
                              label='أداء'
                              className='iconItem'
                              icon='money bill alternate'
                            ></Button>
                          }
                        />
                      </Link>
                    </div>
                  </Table.Cell>
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

        <Segment clearing>
          <Link to='/engagements/add'>
            <Button positive>أضف التزام</Button>
          </Link>

          <Link to='/payments/add/0'>
            <Button color='blue'>أضف أداء </Button>
          </Link>
        </Segment>
        <StaticsComponent {...this.props} />
      </div>
    );
  }
}

export default EngagementList;
