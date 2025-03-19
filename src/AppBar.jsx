import { View, ScrollView } from 'react-native';
import styles from '../theme';
import { Link, Route, Routes, NativeRouter, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SingIn';
import Text from './Text';
import AppBarTab from './AppBarTab';

const AppBar = () => {
    return (
        <>
            <View style={styles.container}>
                <ScrollView horizontal style={{ alignSelf: 'flex-start' }}>
                    <Link underlayColor="#f0f4f7" to={'/signIn'}><AppBarTab text={'Sign In'} /></Link>
                    <Link underlayColor="#f0f4f7" to={'/repositoryList'}><AppBarTab text={'Rendering with React'} /></Link>
                </ScrollView>
            </View>
            <Routes>
                <Route path='/signIn' element={<SignIn />} />
                <Route path='/repositoryList' element={<RepositoryList />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </>
    );
};

export default AppBar;