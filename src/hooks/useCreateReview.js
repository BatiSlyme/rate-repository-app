import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { useState } from "react";
import { useNavigate } from "react-router-native";

const useCreateReview = () => {
    const [error, setError] = useState('');
    const [mutate] = useMutation(CREATE_REVIEW);
    const navigate = useNavigate();
    const createReview = async ({ ownerName, repositoryName, rating, text }) => {
        const variables = {
            review: {
                ownerName,
                rating,
                repositoryName,
                text
            }
        };
        console.log(variables);
        try {
            const { data } = await mutate({ variables });
            setError('');
            navigate(`/${data?.createReview?.repositoryId}`)
            console.log('Review created:', data);
        } catch (err) {
            setError(err.message);
            // console.error('Error creating review:', {
            //     message: err.message,
            //     networkError: err.networkError,
            //     graphQLErrors: err.graphQLErrors,
            //     extraInfo: err.extraInfo
            // });
        }
    };
    return { createReview, error };
};

export default useCreateReview;