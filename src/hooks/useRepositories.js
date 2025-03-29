import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (title, searchBy) => {
  console.log('useRepositories', title, searchBy);
  
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
  console.log('variables', variables);
  
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