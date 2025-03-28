import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';
let variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };

const useRepositories = (title) => {
  switch (title) {
    case 'Latest repositories':
      variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
    case 'Highest rated repositories':
      variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      break;
    case 'Lowest rated repositories':
      variables = { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      break;
    default:
      variables = { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
      break;
  }

  const { data, error, loading, refetch } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
    variables,
  });

  if (error) {
    console.log('Error fetching repositories:', error);
  }
  // console.log('data', data);

  const repositories = data?.repositories;

  return { repositories, loading };
};

export default useRepositories;