import React from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import { isAuthenticated } from "../utils/verifyUser";
import styled from "styled-components";
import { graphql } from "react-apollo";
import { DELETE_ALERT } from "../graphql";
import {
  faTrash,
  faMap,
  faEye,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";

import Dialog from "../containers/Dialog/Dialog";
import Confirmation from "../containers/Dialog/Confirmation";
import Info from "../containers/Dialog/Info";
import Position from "../containers/Position";

import { Header, HeaderFonts, Date, City, FaElipsisIcon, InfoItem, InfoContent, Bold, ListItem, MenuItem, Note, View, Confirm, Reject } from "../components/Table/Table";
import { FormLoad } from "../components/Loader/Loader";
import { FadeInDiv } from "../components/Animation/Animation";

const Menu = styled.ul`
  display: ${props =>
    (props.id == props.currId) & props.toggleMenu ? "block" : "none"};
  position: absolute;
  transform: translate(10%, 10%);
  background-color: white;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.25);
  padding: 9px 0px;
  border: 1px solid #e8e8e8;
  margin: 0px;
  z-index: 999;
  list-style-type: none;
`;

const Bg = styled.div`
  display: ${props => (props.toggled ? "block" : "none")};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
`;

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: 0,
      count: 5,
      alerts: [],
      len: 0,
      loading: false,
      isOpen: false,
      isDelete: false,
      openInfo: false,
      deleteItem: "",
      latitude: "",
      longitude: "",
      finishedLoading: false,
      phone: "",
      email: "",
      desc: "",
      currId: "",
      toggleMenu: false
    };
    this.loadMore = this.loadMore.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }
  async onDelete(alertId) {
    const res = await this.props.mutate({
      variables: { id: alertId }
    });
    const { ok } = res.data.deleteAlert;
    if (ok) {
      window.location.reload();
    }
  }
  async componentDidMount() {
    const { start, count } = this.state;
    const { dname } = this.props;
    let uri = '';
    if (process.env.NODE_ENV === 'production') {
      uri = `/api/alerts/${dname}/${start}/${count}`
    } else {
      uri = `http://localhost:3000/api/alerts/${dname}/${start}/${count}`
    }
    const res = await axios.get(uri);
    this.setState({ alerts: res.data.slicedAlerts, len: res.data.len });
  }
  async loadMore() {
    const { start, count, alerts } = this.state;
    const { dname } = this.props;
    let uri = '';
    const newStart = start + 5;
    const newCount = count + 5;
    if (process.env.NODE_ENV === 'production') {
      uri = `/api/alerts/${dname}/${newStart}/${newCount}`;
    } else {
      uri = `http://localhost:3000/api/alerts/${dname}/${newStart}/${newCount}`;
    }
    this.setState({ start: newStart, count: newCount, loading: true });
    const res = await axios.get(uri);
    this.setState({
      alerts: [...alerts, ...res.data.slicedAlerts],
      loading: false
    });
  }
  renderButton() {
    const { start, count, alerts, loading, len } = this.state;
    if (alerts.length == 0 || alerts.length >= len) {
      return <Note>That's all we have for this month 😊</Note>;
    } else {
      return (
        <button onClick={this.loadMore}>
          {loading ? (
            <FormLoad>
              <ReactLoading type="spin" height="20px" width="20px" />
            </FormLoad>
          ) : (
            "Load more"
          )}
        </button>
      );
    }
  }
  render() {
    const {
      alerts,
      finishedLoading,
      isDelete,
      deleteItem,
      isOpen,
      latitude,
      longitude,
      openInfo,
      email,
      phone,
      desc,
      toggleMenu
    } = this.state;
    return (
      <FadeInDiv>
        <Confirmation
          isOpen={isDelete}
          onClose={e => this.setState({ isDelete: false })}
        >
          <h3>Are you sure?</h3>
          <p>This cannot be undone</p>
          <Confirm onClick={() => this.onDelete(deleteItem)}>Confirm</Confirm>
          <Reject onClick={() => this.setState({ isDelete: false })}>
            Cancel
          </Reject>
        </Confirmation>
        <Dialog isOpen={isOpen} onClose={e => this.setState({ isOpen: false })}>
          <Position lat={latitude} long={longitude} />
        </Dialog>
        <Info
          isOpen={openInfo}
          onClose={e => this.setState({ openInfo: false })}
        >
          <InfoItem>
            <Bold>Email</Bold> <br />
            <InfoContent>{email ? email : "Not provided"}</InfoContent>
          </InfoItem>
          <InfoItem>
            <Bold>Phone</Bold> <br />
            <InfoContent>{phone ? phone : "Not provided"}</InfoContent>
          </InfoItem>
          <InfoItem>
            <Bold>Description</Bold> <br />
            <InfoContent>{desc}</InfoContent>
          </InfoItem>
        </Info>
        <Bg
          onClick={() => this.setState({ toggleMenu: false })}
          toggled={toggleMenu}
        />
        <table>
          <tbody>
            <Header>
              <HeaderFonts>REGION</HeaderFonts>
            </Header>
            {alerts.length == 0 ? (
              <tr>
                <th>No alerts at the moment</th>
              </tr>
            ) : (
              alerts.map(alert => (
                <tr key={alert._id}>
                  <th>
                    <ListItem>
                      <City onClick={() => {
                        this.setState({
                          isOpen: true,
                          latitude: alert.latitude,
                          longitude: alert.longitude
                        })
                      }}>{alert.city}</City>
                      <Date>{alert.mdhm}</Date>
                    </ListItem>
                    {
                      (isAuthenticated().ok && (isAuthenticated().account == 'admin')) ? (
                        <ListItem>
                          <FaElipsisIcon
                            onClick={() =>
                              this.setState({
                                currId: alert._id,
                                toggleMenu: !toggleMenu
                              })
                            }
                            icon={faEllipsisV}
                          />
                          <Menu
                            id={alert._id}
                            currId={this.state.currId}
                            toggleMenu={toggleMenu}
                          >
                            <MenuItem
                              onClick={() =>
                                this.setState({
                                  isDelete: true,
                                  deleteItem: alert._id,
                                  toggleMenu: false
                                })
                              }
                            >
                              Delete
                            </MenuItem>
                            <MenuItem
                              onClick={() =>
                                this.setState({
                                  openInfo: true,
                                  toggleMenu: false,
                                  email: alert.email,
                                  phone: alert.phone,
                                  desc: alert.desc
                                })
                              }
                            >
                              Details
                            </MenuItem>
                          </Menu>
                        </ListItem>
                      ) : (
                        <ListItem><View onClick={() => this.setState({
                          latitude: alert.latitude,
                          longitude: alert.longitude,
                          isOpen: true
                        })}>View</View></ListItem>
                      )
                    }
                  </th>
                </tr>
              ))
            )}
          </tbody>
        </table>
        {this.renderButton()}
      </FadeInDiv>
    );
  }
}

export default graphql(DELETE_ALERT)(Table);
