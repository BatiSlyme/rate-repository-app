import AppBar from "./src/AppBar";
import Main from "./src/Main";
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
// import Constants from 'expo-constants';
const apolloClient = createApolloClient();

export default function App() {
  // console.log(Constants.expoConfig);

  return (
    <>
      <NativeRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <ApolloProvider client={apolloClient}>
          <AppBar />
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
}

