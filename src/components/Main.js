import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';
import MenuList from './Menu';
export default class Main extends Component {
  componentDidMount() {
    this.props.recentEngagements();
    this.props.fetchPayments();
  }
  render() {
    return (
      <Container>
        <MenuList />
        <Header as='h1' textAlign='center'></Header>
        {React.cloneElement(this.props.children, this.props)}
      </Container>
    );
  }
}
