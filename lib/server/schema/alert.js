import { gql } from 'apollo-server-express';

export default gql`
  type Alert {
    id: String
    desc: String
    city: String
    district: String
    latitude: String
    longitude: String
    mdhm: String
  }

  type Query {
    loc: Boolean
    getAlerts(dname: String): AlertInfo
    alerts: [Alert]
  }

  type AlertInfo {
    alerts: [Alert]
    slicedAlerts: [Alert]
    tendency: String
  }

  type AlertResponse {
    ok: Boolean
    alert: Alert
    error: Error
  }

  type Mutation {
    createAlert(desc: String, email: String, phone: String, lat: Float, long: Float): AlertResponse
    deleteAlert(id: String): AlertResponse
  }
`
