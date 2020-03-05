import { gql } from 'apollo-server-express';

export default gql`
  type Stat {
    id: String
    tendency: String
    month: String
    date: String
    year: String
    district: String
  }

  type Query {
    loc: Boolean
    tendencies(timeStamp: String, district: String): StatResponse
  }

  type StatResponse {
    ok: Boolean
    stat: [Stat]
    error: Error
  }
`
