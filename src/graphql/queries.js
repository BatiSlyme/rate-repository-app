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

export const GET_REPOSITORY_BY_ID = gql`query getRepositoryById($repositoryId: ID!) {
  repository(id: $repositoryId) {
    id,
    name,
    ownerName,
    createdAt,
    fullName,
    reviewCount,
    ratingAverage,
    forksCount,
    stargazersCount,
    description,
    language,
    ownerAvatarUrl,
    url,
    reviews {
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
      pageInfo {
        startCursor,
        endCursor,
        hasNextPage,
        hasPreviousPage,
      },
      totalCount
    }
  }
}`;

