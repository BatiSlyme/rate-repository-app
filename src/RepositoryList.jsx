import { FlatList, View, StyleSheet, Pressable } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import Text from './Text';
import theme from '../theme';
import useRepositories from './hooks/useRepositories';
import RepositoryRenderItem from './RepositoryRenderItem';
import { ItemSeparator } from './ItemSeparator';
import MyComponent from './Picker/Picker';
import { List } from 'react-native-paper';

const RepositoryList = () => {
    const { repositories, loading } = useRepositories();
    const repositoryNodes = repositories?.edges?.map(edge => edge.node) || [];
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible)
        console.log(visible);
    };
    const [title, setTitle] = useState('Latest repositories');
    return (
        <>
            <MyComponent visible={visible} setVisible={setVisible} setTitle={setTitle} />
            {loading ? <Text style={{ fontSize: 30 }}> Loading... </Text> : <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                aria-modal={true}
                renderItem={({ item }) =>
                    <RepositoryRenderItem item={item} navigatable={true} />
                }
                ListHeaderComponent={
                    <>
                        <Pressable onPress={toggleVisibility}>
                            <List.Accordion
                                title={title}
                                style={{ backgroundColor: '#d3d3d3' }}
                                onPress={toggleVisibility} />
                        </Pressable>
                    </>
                }
            />}
        </>

    );
};

export default RepositoryList;