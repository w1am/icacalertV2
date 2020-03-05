import gql from 'graphql-tag';

export const ALERTS_QUERY = gql`
  query {
    alerts {
      latitude
      longitude
      city
      id
    }
  }
`

export const DELETE_ALERT = gql`
  mutation($id: String) {
    deleteAlert(id: $id) {
      ok
    }
  }
`

export const LOGIN_MUTATION = gql`
  mutation($username: String, $password: String) {
    login(username: $username, password: $password) {
      ok
      error {
        path
        message
      }
      token
    }
  }
`

export const REGISTER_MUTATION = gql`
  mutation($username: String, $password: String) {
    register(username: $username, password: $password) {
      ok
      error {
        path
        message
      }
    }
  }
`

export const PASSWORD_MUTATION = gql`
  mutation($username: String, $newPassword: String) {
    changePassword(username: $username, newPassword: $newPassword) {
      ok
      error {
        path
        message
      }
    }
  }
`


export const DISTRICT_ALERTS_QUERY = gql`
  query($dname: String) {
    getAlerts(dname: $dname) {
      alerts {
        desc
        mdhm
        city
        id
      }
      tendency
    }
  }
`

export const INFINITE_LOADING_QUERY = gql`
  query($dname: String, $start: Int, $count: Int) {
    listAlerts(dname: $dname, start: $start, count: $count) {
      slicedAlerts {
        desc
        mdhm
        city
        id
      }
    }
  }
`

export const CREATE_ALERT_MUTATION = gql`
  mutation($desc: String, $email: String, $phone: String, $lat: Float, $long: Float) {
    createAlert(desc: $desc, email: $email, phone: $phone, lat: $lat, long: $long) {
      ok
      error {
        path
        message
      }
    }
  }
`

export const TENDENCIES_QUERY = gql`
  query($timeStamp: String, $district: String) {
    tendencies(timeStamp: $timeStamp, district: $district) {
      stat {
        district
        tendency
        date
      }
    }
  }
`
