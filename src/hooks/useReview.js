import { useMutation } from "@apollo/client";
import { CREATE_REVIEW, DELETE_REVIEW } from "../graphql/mutations";
import { useState } from "react";
import { useNavigate } from "react-router-native";
import { ME } from "../graphql/queries";

const useCreateReview = () => {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [mutate] = useMutation(CREATE_REVIEW);
    const [deleteMutation] = useMutation(DELETE_REVIEW, {
        refetchQueries: [
            {
                query: ME,
                variables: { includeReviews: true },
            }
        ],
    });

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

    const deleteReview = async (id) => {
        const { data } = await deleteMutation(
            {
                variables: { deleteReviewId: id }
            }
        );
        return data;
    };

    return { createReview, error, deleteReview };
};

export default useCreateReview;