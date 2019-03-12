import React from 'react';
import { Menu, Icon } from 'semantic-ui-react';

class Channels extends React.Component {
  state = {
    channels: []
  };
  render() {
    const { channels } = this.state;
    return (
      <Menu.Menu style={{ paddingBottom: '2em' }}>
        <span>
          <Icon name='exchange' /> CHANNELS
        </span>{' '}
        ({channels.length})<Icon name='add' />
      </Menu.Menu>
      /*{Channels}*/
    );
  }
}

export default Channels;
