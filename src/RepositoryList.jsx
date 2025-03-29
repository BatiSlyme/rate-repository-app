import { FlatList } from 'react-native';
import React, { useState } from 'react';
import Text from './Text';
import useRepositories from './hooks/useRepositories';
import RepositoryRenderItem from './RepositoryRenderItem';
import { ItemSeparator } from './ItemSeparator';
import Picker from './Picker/Picker';
import RepositoryListHeader from './RepositoryListHeader';

const RepositoryList = () => {
    const [title, setTitle] = useState('Latest repositories');
    const [searchTerm, setSearchTerm] = useState('');
    const { repositories, loading } = useRepositories(title, searchTerm);
    const repositoryNodes = repositories?.edges?.map(edge => edge.node) || [];
    const [visible, setVisible] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible)
        console.log(visible);
    };
    return (
        <>
            {loading ? <Text style={{ fontSize: 30 }}> Loading... </Text> :
                <>
                    <Picker visible={visible} setVisible={setVisible} setTitle={setTitle} />
                    <FlatList
                        data={repositoryNodes}
                        ItemSeparatorComponent={ItemSeparator}
                        aria-modal={true}
                        renderItem={({ item }) =>
                            <RepositoryRenderItem item={item} navigatable={true} />
                        }
                        ListHeaderComponent={
                            <RepositoryListHeader
                                setSearchTerm={setSearchTerm}
                                searchTerm={searchTerm}
                                title={title}
                                toggleVisibility={toggleVisibility}
                            />
                        }
                    />
                </>
            }
        </>

    );
};

export default RepositoryList;