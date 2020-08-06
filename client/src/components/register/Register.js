import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ExtendedForm, Input } from '../../global/forms';
import { Button } from '../../global/buttons';
import { register } from '../account/actions/account_actions';
import { Heading } from './styles';

const Register = (props) => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    props.register(name, username, password);
  };

  return (
    <ExtendedForm onSubmit={handleSubmit}>
      <Heading>Register</Heading>
      <Input
        type='text'
        placeholder='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
      <Button type='submit'>Create Account</Button>
    </ExtendedForm>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    register: (name, username, password) =>
      dispatch(register(name, username, password)),
  };
};

export default connect(null, mapDispatchToProps)(Register);
