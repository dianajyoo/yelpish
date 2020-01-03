import React from 'react';
import Account from '../components/Account';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { login, register } from '../store/actionCreators/authAction';

class AccountContainer extends React.Component {
  state = {
    name: '',
    username: '',
    newUsername: '',
    password: '',
    newPassword: ''
  }

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, register, history } = this.props;

    if(e.target.className === 'form login') {
      const username = e.target.children[0].value;
      const password = e.target.children[2].value;

      login(username, password);

      history.push('/profile');
    }

    if(e.target.className === 'form register') {
      const name = e.target.children[0].value;
      const username = e.target.children[2].value;
      const password = e.target.children[4].value;

      register(name, username, password);
      
      history.push('/profile');
    }
    
    this.clearInput();
  }

  clearInput = () => {
    this.setState({
      name: '',
      username: '',
      newUsername: '',
      password: '',
      newPassword: ''
    });
  }

  render() {
    const { name, username, newUsername, password, newPassword } = this.state;
    const { loggedIn, handleLogout } = this.props;

    return (
      <React.Fragment>
        <Header loggedIn={loggedIn} handleLogout={handleLogout} />
        <Account
          name={name}
          username={username}
          newUsername={newUsername}
          password={password}
          newPassword={newPassword}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(login(username, password)),
    register: (name, username, password) => dispatch(register(name, username, password))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AccountContainer));