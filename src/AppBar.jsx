import { View, ScrollView, Pressable } from 'react-native';
import styles from '../theme';
import { Link, Route, Routes, NativeRouter, useParams, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SingIn';
import AppBarTab from './AppBarTab';
import { useSignOut } from './hooks/useSignOut';
import useCheckAuthentication from './hooks/useCheckAuthentication';
import RepositoryItem from './RepositoryItem';
import useRepositoryById from './hooks/useRepositoryById';
import CreateReview from './CreateReview';
import SignUp from './SignUp';

const AppBar = () => {
    const { signOut } = useSignOut();
    const signedIn = useCheckAuthentication();
    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal style={{ alignSelf: 'flex-start' }}>
                    {!signedIn && <Link underlayColor="#f0f4f7" to={'/signIn'}><AppBarTab text={'Sign In'} /></Link>}
                    {!signedIn && <Link underlayColor="#f0f4f7" to={'/signUp'}><AppBarTab text={'Sign up'} /></Link>}
                    <Link underlayColor="#f0f4f7" to={'/repositoryList'}><AppBarTab text={'Rendering with React'} /></Link>
                    {signedIn && <Link underlayColor="#f0f4f7" to={'/createReview'}><AppBarTab text={'Create a review'} /></Link>}
                    {signedIn && <Pressable onPress={() => { signOut() }} ><AppBarTab text={'Sign Out'} /></Pressable>}
                </ScrollView>
            </View>
            <Routes>
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/signUp' element={<SignUp />} />
                <Route path={`/repositoryList`} element={<RepositoryList />} />
                <Route path={`/:repositoryId`} element={<RepositoryItem />} />
                <Route path={`/createReview`} element={<CreateReview />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
};

export default AppBar;