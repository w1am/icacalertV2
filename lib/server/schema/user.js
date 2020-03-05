import { gql } from 'apollo-server-express';

export default gql`
  type User {
    id: String
    username: String
    password: String
  }
  type Query {
    hello: String
  }
  type RegisterResponse {
    ok: Boolean
    user: User
    error: Error
  }
  type LoginResponse {
    ok: Boolean
    user: User
    error: Error
    token: String
  }
  type Mutation {
    register(username: String, password: String): RegisterResponse
    login(username: String, password: String): LoginResponse
    changePassword(username: String, newPassword: String): LoginResponse
  }
`
