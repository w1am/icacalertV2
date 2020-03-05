import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { graphql } from 'react-apollo';
import { LOGIN_MUTATION } from '../../graphql';
import { Redirect } from 'react-router-dom';

import { Layout, Header } from '../../components/Layouts/Card';
import { SuccessMsg, ErrorMsg } from '../../components/Message/Message';
import { FormLoad } from '../../components/Loader/Loader';
import { FadeInDiv } from '../../components/Animation/Animation'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      ok: false,
      clicked: false,
      redirect: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({
        error: 'Fields cannot be left blank',
        loading: false
      })
    }
    const response = await this.props.mutate({
      variables: { username, password }
    });
    const { ok, error, token } = response.data.login;
    if (ok) {
      localStorage.setItem('token', token);
      this.setState({ ok: true, loading: false, clicked: true, redirect: true })
    } else {
      this.setState({
        error: error.message,
        clicked: true,
        loading: false
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, clicked: false, error: false, ok: false });
  }

  render() {
    const { username, password, error, ok, clicked, loading, redirect } = this.state;
    if (redirect) {
      return <Redirect to='/' />
    }
    return (
      <FadeInDiv>
        <Header>LOGIN</Header>
        <Layout>
          <form>
            <input
              onChange={this.onChange}
              value={username}
              type='text'
              name='username'
              placeholder='Username'
            /> <br />
            <input
              onChange={this.onChange}
              value={password}
              type='password'
              name='password'
              placeholder='Password'
            /> <br />
            <button disabled={loading || clicked || error} onClick={this.onSubmit}>
              { loading ? (
                <FormLoad>
                  <ReactLoading type="spin" height="20px" width="20px"/>
                </FormLoad>
              ) : 'Login' }
            </button>
          </form>
          {
            ok ? (
              <FadeInDiv>
                <SuccessMsg>You are now logged in.</SuccessMsg>
              </FadeInDiv>
            ) : null
          }
          {
            error ? (
              <FadeInDiv>
                <ErrorMsg>{error}</ErrorMsg>
              </FadeInDiv>
            ) : null
          }
        </Layout>
      </FadeInDiv>
    )
  }
}

export default graphql(LOGIN_MUTATION)(Login);
