import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
import { useState } from 'react';

const useRepositories = (title, searchBy) => {
  // console.log('useRepositories', title, searchBy);
  let variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC', searchKeyword: searchBy };

  switch (title) {
    case 'Latest repositories':
      variables = { ...variables, orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
    case 'Highest rated repositories':
      variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      break;
    case 'Lowest rated repositories':
      variables = { ...variables, orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      break;
    default:
      variables = { ...variables, orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
  }
  // console.log('variables', variables);

  const { data, error, fetchMore, loading, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  if (error) {
    console.log('Error fetching repositories:', error);
  }
  // console.log('data', data);
  const [fetchMoreLoading, setFetchMoreLoading] = useState(false);
  const handleFetchMore = () => {
    console.log('fetching more repositories', data?.repositories.pageInfo.hasNextPage);
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;

    if (!canFetchMore) {
      return;
    }

    setFetchMoreLoading(true);

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    }).then(() => { setFetchMoreLoading(false) });
  };

  const repositories = data?.repositories;

  return { repositories, loading, fetchMore: handleFetchMore, fetchMoreLoading, ...result };
};

export default useRepositories;