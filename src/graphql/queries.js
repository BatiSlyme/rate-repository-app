import { gql } from '@apollo/client';
import { REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
 query filterRepositories($orderBy: AllRepositoriesOrderBy!, $orderDirection: OrderDirection!) {
  repositories(orderBy: $orderBy, orderDirection: $orderDirection) {
    ...RepositoryFields
  }
}
${REPOSITORY_FIELDS}
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

