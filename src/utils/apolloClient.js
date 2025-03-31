import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import Constants from 'expo-constants';
import { setContext } from '@apollo/client/link/context';
import { relayStylePagination } from '@apollo/client/utilities';

const apolloUri = Constants.expoConfig.extra.APOLLO_URI;

const httpLink = createHttpLink({
  uri: apolloUri,
});

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
});

const createApolloClient = (authStorage) => {

  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken();
      // console.log('accessToken in createApolloClient', accessToken);

      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
      };
    } catch (e) {
      // console.log('❌ Error getting access token:', e);
      return { headers };
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink), // ✅ Use `authLink.concat(httpLink)`
    cache,
  });

  // console.log('✅ Apollo Client Created:', client);

  return client;
};

export default createApolloClient;
