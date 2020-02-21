import React, { Component } from 'react';
import EngagementList from './EngagementList';
import { Divider } from 'semantic-ui-react';
export default class Home extends Component {
  render() {
    return (
      <div>
        <Divider />
        <EngagementList {...this.props} />
      </div>
    );
  }
}
