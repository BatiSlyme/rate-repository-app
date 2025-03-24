import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation authorize($username: String!, $password: String!) {
    authenticate(credentials: { username: $username, password: $password }) {
      accessToken
    }
  }
`;

export const ME = gql`{
    me {
      id
      username
    }
  }`;