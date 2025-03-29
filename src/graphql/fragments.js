import { gql } from '@apollo/client';

export const REPOSITORY_FIELDS = gql`
  fragment RepositoryFields on RepositoryConnection {
    totalCount
    edges {
      cursor
      node {
        id
        name
        ownerName
        createdAt
        fullName
        reviewCount
        ratingAverage
        forksCount
        stargazersCount
        description
        language
        ownerAvatarUrl
      }
    }
    pageInfo {
      endCursor
      hasNextPage
      hasPreviousPage
      startCursor
      __typename
    }
  }
`;

export const REVIEW_FIELDS = gql`
fragment ReviewFields on ReviewConnection {
  edges {
   node {
      id,
        text,
        rating,
        createdAt,
        user {
        id,
          username
      },
    },
  },
}
`;