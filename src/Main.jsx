import { Text, StyleSheet, View } from 'react-native';
import RepositoryList from './RepositoryList';
import { Route, Routes, Navigate, Link } from 'react-router-native';
import SignIn from './SingIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>

            {/* <Routes> */}
                {/* <Route path='/' element={<RepositoryList />} /> */}

                {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
            {/* </Routes> */}
            <Text>Rate Repository Application</Text>

        </View>
    );
};

export default Main;