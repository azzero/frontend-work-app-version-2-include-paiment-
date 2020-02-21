import React from 'react';
import { Segment, Button } from 'semantic-ui-react';
import { Link } from 'react-router';
const ExploreButton = () => {
  return (
    <Segment clearning>
      <Link to='/'>
        <Button labelPosition='left' icon='left chevron' content='Back' />
      </Link>
      <Link to='/engagement/print'>
        <Button labelPosition='right' icon='' content='print' />
      </Link>
    </Segment>
  );
};

export default ExploreButton;
