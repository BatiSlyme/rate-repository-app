import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';

const useRepositoryById = (repositoryId) => {
    if (!repositoryId) {
        return { data: null, loading: true };
    }
    const { data, error, loading, refetch, } = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { repositoryId },
        fetchPolicy: 'cache-and-network',
    });

    if (error) {
        console.log('Error fetching repository:', error);
    }

    // console.log('useRepositoryById->data', data);
    return { data: data?.repository, reviews: data?.repository?.reviews, loading };
}
export default useRepositoryById;