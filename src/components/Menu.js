import React, { Component } from 'react';
import { Menu, Icon } from 'semantic-ui-react';
import { Link } from 'react-router';

export default class MenuList extends Component {
  constructor(props) {
    super(props);
    this.state = { activeItem: 'home' };
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div className='MenuCustom'>
        <Menu size='large'>
          <Link to='/'>
            <Menu.Item
              name='home'
              // eslint-disable-next-line
              active={activeItem == 'home'}
              onClick={this.handleItemClick}
            >
              <Icon name='home' />
            </Menu.Item>
          </Link>
          <Link to='payments/'>
            <Menu.Item
              name='payment'
              // eslint-disable-next-line
              active={activeItem == 'payment'}
              onClick={this.handleItemClick}
            >
              الأداءات
            </Menu.Item>
          </Link>
          <Link to='/'>
            <Menu.Item
              name='engagement'
              // eslint-disable-next-line
              active={activeItem == 'engagement'}
              onClick={this.handleItemClick}
            >
              الالتزامات
            </Menu.Item>
          </Link>
          <Link to='engagement/explore'>
            <Menu.Item>طبع الالتزامات</Menu.Item>
          </Link>
        </Menu>
      </div>
    );
  }
}
