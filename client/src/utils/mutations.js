
import { gql } from '@apollo/client';

const  LOGIN = gql`
mutation Mutation($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      email
      password
    }
  }
`;

export default LOGIN;

