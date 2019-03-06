import React from 'react';
import {
  Grid,
  Form,
  Segment,
  Button,
  Header,
  Message,
  Icon
} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
  handleChange = () => {};

  render() {
    return (
      <Grid className='app' textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='write' color='orange' />
            Register for Scrite.Club
          </Header>
          <Form size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                icon='user'
                iconposition='left'
                placeholder='Username'
                onChange={this.handleChange}
                type='text'
              />
              <Form.Input
                fluid
                name='email'
                icon='mail'
                iconposition='left'
                placeholder='Email Address'
                onChange={this.handleChange}
                type='text'
              />
              <Form.Input
                fluid
                name='password'
                icon='lock'
                iconposition='left'
                placeholder='Password'
                onChange={this.handleChange}
                type='password'
              />
              <Form.Input
                fluid
                name='passwordConfirmation'
                icon='repeat'
                iconposition='left'
                placeholder='Password Confirmation'
                onChange={this.handleChange}
                type='password'
              />
              <Button color='orange' fluid size='large'>
                Submit
              </Button>
            </Segment>
          </Form>
          <Message>
            Already a user? <Link to='/Login'>Login</Link>{' '}
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Register;
