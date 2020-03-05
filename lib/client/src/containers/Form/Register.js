import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { graphql } from 'react-apollo';
import { REGISTER_MUTATION } from '../../graphql';

import { Layout, Header } from '../../components/Layouts/Card';
import { SuccessMsg, ErrorMsg } from '../../components/Message/Message';
import { FormLoad } from '../../components/Loader/Loader';
import { FadeInDiv } from '../../components/Animation/Animation'

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: '',
      ok: false,
      clicked: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    const { username, password } = this.state;
    const response = await this.props.mutate({
      variables: { username, password }
    });
    const { ok, error } = response.data.register;
    if (ok) {
      this.setState({ ok: true, loading: false, clicked: true })
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
    const { username, password, error, ok, clicked, loading } = this.state;
    return (
      <FadeInDiv>
        <Header>REGISTER</Header>
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
            <button disabled={loading || clicked} onClick={this.onSubmit}>
              { loading ? (
                <FormLoad>
                  <ReactLoading type="spin" height="20px" width="20px"/>
                </FormLoad>
              ) : 'Register' }
            </button>
          </form>
          {
            ok ? (
              <FadeInDiv>
                <SuccessMsg>Account successfully created.</SuccessMsg>
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

export default graphql(REGISTER_MUTATION)(Register);
