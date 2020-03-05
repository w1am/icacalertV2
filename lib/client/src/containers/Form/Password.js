import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { PASSWORD_MUTATION } from '../../graphql';
import { Redirect } from 'react-router-dom';
import { isAuthenticated } from '../../utils/verifyUser';

import { Layout, Header } from '../../components/Layouts/Card';
import { SuccessMsg, ErrorMsg } from '../../components/Message/Message';
import { FormLoad } from '../../components/Loader/Loader';
import { FadeInDiv } from '../../components/Animation/Animation'

const Cancel = styled.p`
  text-align: center;
  font-size: 14px;
`

class Password extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      confirmPassword: '',
      error: '',
      ok: false,
      clicked: false,
      redirect: false,
      loading: false
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  async onSubmit(e) {
    e.preventDefault();
    this.setState({ loading: true })
    const username = isAuthenticated().account;
    const { newPassword, confirmPassword } = this.state;
    if (newPassword == '' || confirmPassword == '') {
      this.setState({
        error: 'Fields cannot be left blank',
        loading: false
      })
    } else {
      if (confirmPassword !== newPassword) {
        this.setState({
          error: 'Please enter the same value again',
          loading: false
        })
      } else {
        const response = await this.props.mutate({
          variables: { username, newPassword }
        });
        const { ok, error } = response.data.changePassword;
        if (ok) {
          this.setState({ ok: true, loading: false, clicked: true, redirect: true })
        } else {
          this.setState({
            error: error.message,
            clicked: true,
            loading: false
          })
        }
      }
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, clicked: false, error: false, ok: false });
  }

  render() {
    const { confirmPassword, newPassword, error, ok, clicked, loading, redirect } = this.state;
    if (redirect) {
      return <Redirect to='/account/login' />
    }
    return (
      <FadeInDiv>
        <Header>CHANGE PASSWORD</Header>
        <Layout>
          <form>
            <input
              onChange={this.onChange}
              value={newPassword}
              type='password'
              name='newPassword'
              placeholder='New password'
            /> <br />
            <input
              onChange={this.onChange}
              value={confirmPassword}
              type='password'
              name='confirmPassword'
              placeholder='Confirm password'
            /> <br />
            <button disabled={loading || clicked || error } onClick={this.onSubmit}>
              { loading ? (
                <FormLoad>
                  <ReactLoading type="spin" height="20px" width="20px"/>
                </FormLoad>
              ) : 'Change password' }
            </button>
            <Cancel><Link to='/'>Cancel</Link></Cancel>
          </form>
          {
            ok ? (
              <FadeInDiv>
                <SuccessMsg>Password Changed</SuccessMsg>
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

export default graphql(PASSWORD_MUTATION)(Password);
