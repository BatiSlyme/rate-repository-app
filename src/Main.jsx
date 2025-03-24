import { Text, StyleSheet, View } from 'react-native';
import useCheckAuthentication from './hooks/useCheckAuthentication';
// import RepositoryList from './RepositoryList';
// import { Route, Routes, Navigate, Link } from 'react-router-native';
// import SignIn from './SingIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    const me = useCheckAuthentication();

    return (
        <View style={styles.container}>
            <Text>Rate Repository Application{me ? `. Welcome ${me.username}!` : ''}</Text>
        </View>
    );
};

export default Main;