// import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Menu } from 'react-native-paper';
import Text from '../Text';
import { Modal as RNModal } from 'react-native';

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Optional: semi-transparent backdrop
        zIndex: 1000, // Ensure it's above everything
    },
    modalContent: {
        width: '80%',
    },
    innerContainer: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
    },
    menuContainer: {
        paddingTop: 20,
    },
});

const Picker = ({ visible, setVisible, setTitle }) => {
    const onTitleChange = (title) => {
        setTitle(title);
        setVisible(!visible);
    }
    return (
        <RNModal
            visible={visible}
            transparent={true}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.innerContainer}>
                    <Text style={{ fontWeight: '100', color: '#888', fontStyle: 'italic' }}>Select an item...</Text>
                    <Menu.Item
                        // leadingIcon="redo"
                        onPress={() => {
                            onTitleChange('Latest repositories')
                        }}
                        title="Latest repositories" />
                    <Menu.Item
                        // leadingIcon="undo"
                        onPress={() => { onTitleChange('Highest rated repositories') }}
                        title="Highest rated repositories" />
                    <Menu.Item
                        // leadingIcon="content-cut"
                        onPress={() => { onTitleChange('Lowest rated repositories') }}
                        title="Lowest rated repositories" />
                </View>
            </View>
        </RNModal>)
};

export default Picker;
