import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { FaIcon, Close, Header, Layout, Modal, Popup } from '../../components/Dialog/Dialog';

class Dialog extends React.Component {
  render() {
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

export default Dialog;
