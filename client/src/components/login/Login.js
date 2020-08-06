import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ExtendedForm, Input } from '../../global/forms';
import { Button } from '../../global/buttons';
import { login } from '../../components/account/actions/account_actions';
import { Heading } from './styles';

const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.login(username, password);
  };

  return (
    <ExtendedForm onSubmit={handleSubmit}>
      <Heading>Login</Heading>
      <Input
        type='text'
        placeholder='Username'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type='submit'>Go to Account</Button>
    </ExtendedForm>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
