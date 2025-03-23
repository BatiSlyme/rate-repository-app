import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
 query repositories {
  repositories {
    totalCount,
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
}
`;

// other queries...