import React from 'react';
import firebase from '../../firebase';
<<<<<<< HEAD
import { Grid, Header, Icon, Dropdown, Image } from 'semantic-ui-react';
=======
import { Grid, Header, Icon, Dropdown } from 'semantic-ui-react';
>>>>>>> 022ba7e1ba316497b83352aa85561833fc790431

class UserPanel extends React.Component {
  dropdownOptions = () => [
    {
      key: 'user',
      text: (
        <span>
          Signed in as <strong>{this.props.currentUser.displayName}</strong>
        </span>
      ),
      disabled: true
    },
    {
      key: 'avatar',
      text: <span>Change Avatar</span>
    },
    {
      key: 'signout',
      text: <span onClick={this.handleSignout}>Sign Out</span>
    }
  ];

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log('signed out!'));
  };

  render() {
    const { currentUser } = this.props;
    return (
      <Grid style={{ background: '#4c3c4c' }}>
        <Grid.Column>
          <Grid.Row style={{ padding: '1.2em', margin: 0 }}>
            {/* App Header */}
            <Header inverted floated='left' as='h2'>
              <Icon name='code' />
<<<<<<< HEAD
              <Header.Content>ScriteClub</Header.Content>
            </Header>

            {/* User Dropdown  */}
            <Header style={{ padding: '0.25em' }} as='h4' inverted>
              <Dropdown
                trigger={
                  <span>
                    <Image src={currentUser.photoURL} spaced='right' avatar />
                    {currentUser.displayName}
                  </span>
                }
                options={this.dropdownOptions()}
              />
            </Header>
          </Grid.Row>
=======
              <Header.Content>DevChat</Header.Content>
            </Header>
          </Grid.Row>

          {/* User Dropdown  */}
          <Header style={{ padding: '0.25em' }} as='h4' inverted>
            <Dropdown
              trigger={<span>{this.props.currentUser.displayName}</span>}
              options={this.dropdownOptions()}
            />
          </Header>
>>>>>>> 022ba7e1ba316497b83352aa85561833fc790431
        </Grid.Column>
      </Grid>
    );
  }
}

export default UserPanel;
