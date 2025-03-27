import { Text, StyleSheet, View } from 'react-native';
import useCheckAuthentication from './hooks/useCheckAuthentication';
// import RepositoryList from './RepositoryList';
// import { Route, Routes, Navigate, Link } from 'react-router-native';
// import SignIn from './SingIn';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexGrow: 1,  // Ensures it takes full height, even with few reviews
        flexShrink: 1, // Ensures it can be scrolled when reviews don't fit
        backgroundColor: '#e1e4e8',
        justifyContent: "flex-start", // Ensures content stays at the top
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