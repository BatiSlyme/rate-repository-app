import AppBar from "./src/AppBar";
import Main from "./src/Main";
import { NativeRouter } from 'react-router-native';
import { ApolloProvider } from '@apollo/client';
import createApolloClient from './src/utils/apolloClient';
import AuthStorage from "./src/utils/authStorage";
import AuthStorageContext from './src/contexts/AuthStorageContext';

// import Constants from 'expo-constants';
const authStorage = new AuthStorage();
const apolloClient = createApolloClient(authStorage);

export default function App() {
  // console.log(Constants.expoConfig);
  return (
    <>
      <NativeRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <ApolloProvider client={apolloClient}>
          <AuthStorageContext.Provider value={authStorage}>
            <AppBar />
          </AuthStorageContext.Provider>
          <Main />
        </ApolloProvider>
      </NativeRouter>
    </>
  );
}

