import { useApolloClient, useMutation } from '@apollo/client';
import { LOGIN } from '../graphql/mutations';
import AuthStorage from '../utils/authStorage';
import useAuthStorage from './useAuthStorage';
const tokenStorage = new AuthStorage();

const useSignIn = () => {
    const [mutate, result] = useMutation(LOGIN);
    const authStorage = useAuthStorage();
    const client = useApolloClient();
    // console.log('useSignIn result', result);

    const signIn = async ({ username, password }) => {
        // console.log('signing in', username, password);
        const { data } = await mutate({ variables: { username, password } });
        console.log('Request:', { username, password });
        console.log('Response:', data);
        await tokenStorage.setAccessToken(data.authenticate.accessToken);
        client.resetStore()
    };

    return [signIn, result];
};

export default useSignIn;