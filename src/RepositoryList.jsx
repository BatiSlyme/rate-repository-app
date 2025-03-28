import { FlatList, Pressable } from 'react-native';
import { useState } from 'react';
import Text from './Text';
import useRepositories from './hooks/useRepositories';
import RepositoryRenderItem from './RepositoryRenderItem';
import { ItemSeparator } from './ItemSeparator';
import Picker from './Picker/Picker';
import { List } from 'react-native-paper';

const RepositoryList = () => {
    const [title, setTitle] = useState('Latest repositories');
    const { repositories, loading } = useRepositories(title);
    const repositoryNodes = repositories?.edges?.map(edge => edge.node) || [];
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible)
        console.log(visible);
    };
    return (
        <>
            <Picker visible={visible} setVisible={setVisible} setTitle={setTitle} />
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