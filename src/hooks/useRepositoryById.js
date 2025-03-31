import { useQuery } from '@apollo/client';
import { GET_REPOSITORY_BY_ID } from '../graphql/queries';
import { useState } from 'react';

const useRepositoryById = (repositoryId) => {
    const [reviewsLoading, setReviewsLoading] = useState(false);

    if (!repositoryId) {
        return { data: null, loading: true };
    }
    const { data, error, loading, fetchMore, refetch, } = useQuery(GET_REPOSITORY_BY_ID, {
        variables: { repositoryId },
        fetchPolicy: 'cache-and-network',
    });

    if (error) {
        console.log('Error fetching repository:', error);
    }

    const handleFetchMore = () => {
        console.log('fetching more reviews', data.repository.reviews.pageInfo.hasNextPage);
        const hasNextPage = data?.repository?.reviews?.pageInfo?.hasNextPage;
        if (!hasNextPage) {
            return;
        }

        setReviewsLoading(true);
        fetchMore({
            variables: {
                after: data?.repository?.reviews?.pageInfo?.endCursor
            },
        }).then(() => {
            setReviewsLoading(false);
        });
    }

    // console.log('useRepositoryById->data', data);
    return {
        data: data?.repository,
        reviews: data?.repository?.reviews,
        loading,
        fetchMore: handleFetchMore,
        reviewsLoading
    };
}
export default useRepositoryById;