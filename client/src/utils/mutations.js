
import { gql } from '@apollo/client';

export const CREATE_USER = `
mutation Mutation($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      email
      password
    }
  }
`;

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
        savedBooks {
          bookId
          title
          description
          image
          link
          authors {
            name
          }
        }
      }
    }
  }
`;

export default LOGIN_USER



