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
import firebase from '../../firebase';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(createdUser => {
        console.log(createdUser);
      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    const { username, email, password, passwordConfirmation } = this.state;
    return (
      <Grid className='app' textAlign='center' verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as='h2' icon color='orange' textAlign='center'>
            <Icon name='write' color='orange' />
            Register for Scrite.Club
          </Header>
          <Form onSubmit={this.handleSubmit} size='large'>
            <Segment stacked>
              <Form.Input
                fluid
                name='username'
                icon='user'
                iconposition='left'
                placeholder='Username'
                onChange={this.handleChange}
                value={username}
                type='text'
              />
              <Form.Input
                fluid
                name='email'
                icon='mail'
                iconposition='left'
                placeholder='Email Address'
                onChange={this.handleChange}
                value={email}
                type='text'
              />
              <Form.Input
                fluid
                name='password'
                icon='lock'
                iconposition='left'
                placeholder='Password'
                onChange={this.handleChange}
                value={password}
                type='password'
              />
              <Form.Input
                fluid
                name='passwordConfirmation'
                icon='repeat'
                iconposition='left'
                placeholder='Password Confirmation'
                onChange={this.handleChange}
                value={passwordConfirmation}
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
