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

export const CREATE_REVIEW = gql`mutation CreateReview($review: CreateReviewInput!) {
  createReview(review: $review) {
    createdAt
    id
    rating
    repositoryId
    userId
    text
  }
}
`;