import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const FaIcon = styled(FontAwesomeIcon)`
  font-size: 25px;
  &:hover {
    cursor: pointer
  }
`

const Close = styled.p`
  margin: 0px;
  text-align: right;
`

const Content = styled.p`
  width: 100%;
`

const Header = styled.div`
  background-color: #F4F4F4;
  padding: 18px 30px;
  color: #C0C0C0;
  font-weight: 700;
  border-top: 1px solid #E5E5E5;
  border-right: 1px solid #E5E5E5;
  border-left: 1px solid #E5E5E5;
  border-radius: 5px 5px 0px 0px;
`
const Layout = styled.div`
  padding: 20px 30px;
  max-height: 75%;
  overflow-y: scroll;
`

const Modal = styled.div`
  display: block;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background: rgba(75, 75, 75, 0.1);
`

const Popup = styled.div`
  width: 40%;
  height: 75%;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  top: 50%;
  background: white;
  border: 1px solid #E5E5E5;
  transform: translate(-50%, -50%);
  zIndex: 999;
  border-radius: 5px;
`

class Info extends React.Component {
  render() {
    const { info } = this.props
    let dialog = (
      <Popup>
        <Header><Close onClick={this.props.onClose}><FaIcon icon={faTimes} /></Close></Header>
        <Layout>{ this.props.children }</Layout>
      </Popup>
    )

    if (!this.props.isOpen) {
      return null
    } else {
      return (
        <Modal>
          { dialog }
        </Modal>
      )
    }
  }
}

export default Info;
