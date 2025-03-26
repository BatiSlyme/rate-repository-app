import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 10,
        backgroundColor: '#e1e4e8',
    }
});

export const ItemSeparator = () => <View style={styles.separator} />;