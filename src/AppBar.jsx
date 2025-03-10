import { View } from 'react-native';
import styles from '../theme';
import AppBarTab from './AppBarTab';

const AppBar = () => {
    return (
        <View style={styles.container}>
            <AppBarTab text="Repositories" />
        </View>
    );
};

export default AppBar;