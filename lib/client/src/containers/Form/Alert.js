import React from 'react';
import styled from 'styled-components';
import ReactLoading from 'react-loading';
import { graphql } from 'react-apollo';
import { CREATE_ALERT_MUTATION } from '../../graphql';
import { checkEmail, checkPhone } from '../../utils/formChecker';

import { Layout, Header } from '../../components/Layouts/Card';
import { SuccessMsg, ErrorMsg } from '../../components/Message/Message';
import { FormLoad } from '../../components/Loader/Loader';
import { FadeInDiv } from '../../components/Animation/Animation'
import { CheckBox, Check, CheckBoxList, Note } from '../../components/Form/Alert';

const Label = styled.label`
  display: inline-block;
  color: ${props => (props.checked ? '#fff': '#adadad')};
  border: ${props => (props.checked ? "2px solid #1d2f7c" : '2px solid #DCDCDA')}
  border-radius: 25px;
  background-color: ${props => (props.checked ? '#2D46B9' : 'white')}
  white-space: nowrap;
  margin: 3px 0px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  transition: all .2s;
  padding: 8px 12px;
  cursor: pointer;
  &::before {
    display: inline-block;
    padding-right: 8px;
    content: '+';
    font-weight: 800;
  }
  @media (max-width: 850px) {
    font-size: 12px;
  }
`

class Alert extends React.Component {
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      if (position) {
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        })
      }
    })
  }

  constructor(props) {
    super(props);
    this.state = {
      desc: '',
      email: '',
      phone: '',
      incEmail: false,
      incPhone: false,
      lat: 0,
      long: 0,
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
    const { desc, email, phone, lat, long, incEmail, incPhone } = this.state;
    if (!desc) {
      this.setState({
        error: 'Description field cannot be left blank',
        loading: false
      })
    } else if (incEmail && !checkEmail(email)) {
      this.setState({
        error: 'Invalid email address',
        loading: false
      })
    } else if (incPhone && !checkPhone(phone)) {
      this.setState({
        error: 'Invalid phone number',
        loading: false
      })
    } else {
      const response = await this.props.mutate({
        variables: { desc, email, phone, lat, long }
      });
      const { ok, error } = response.data.createAlert;
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
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value, clicked: false, error: false, ok: false });
  }

  render() {
    const { desc, email, phone, error, ok, clicked, loading, incEmail, incPhone } = this.state;
    console.log(incEmail);
    return (
      <div>
        <Header>ALERT</Header>
        <Layout>
          <form>
            <input
              onChange={this.onChange}
              value={desc}
              type='text'
              name='desc'
              placeholder='Brief Description (required)'
            /> <br />
            <Note>These fields below may be left blank if you wish.</Note>
            <CheckBox>
              <CheckBoxList>
                <Check style={{ width: "2px" }} id="checkBoxEmail" onChange={() => this.setState({ incEmail: !incEmail })} type='checkbox' />
                <Label checked={incEmail} htmlFor='checkBoxEmail'>Include Email</Label>
              </CheckBoxList>
            </CheckBox>
            <CheckBox>
              <CheckBoxList>
                <Check style={{ width: "2px" }} id="checkBoxPhone" onChange={() => this.setState({ incPhone: !incPhone })} type='checkbox' />
                <Label checked={incPhone} htmlFor='checkBoxPhone'>Include Mobile</Label>
              </CheckBoxList>
            </CheckBox>
            {
              incEmail ? (
                <FadeInDiv>
                  <input
                    onChange={this.onChange}
                    value={email}
                    type='email'
                    name='email'
                    placeholder='Email Address (optional)'
                  /> 
                </FadeInDiv>
              ) : null
            }
            {
              incPhone ? (
                <FadeInDiv>
                  <input
                    onChange={this.onChange}
                    value={phone}
                    type='phone'
                    name='phone'
                    placeholder='Mobile Number (optional)'
                  />
                </FadeInDiv>
              ) : null
            }
            <button disabled={loading || clicked || error} onClick={this.onSubmit}>
              { loading ? (
                <FormLoad>
                  <ReactLoading type="spin" height="20px" width="20px"/>
                </FormLoad>
              ) : 'Send alert' }
            </button>
          </form>
          {
            ok ? (
              <FadeInDiv>
                <SuccessMsg>This is a success message.</SuccessMsg>
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
      </div>
    )
  }
}

export default graphql(CREATE_ALERT_MUTATION)(Alert);
