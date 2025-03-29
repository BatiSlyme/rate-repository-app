import { useQuery } from "@apollo/client";
import { ME } from "../graphql/queries";

const useCurrentReviews = () => {
    const { data, loading, error } = useQuery(ME, {
        fetchPolicy: "cache-and-network",
        variables: { includeReviews: true },
    });
    // console.log('useCurrentReviews -> data', data);

    return { data: data?.me?.reviews?.edges, loading, error };
}

export default useCurrentReviews;