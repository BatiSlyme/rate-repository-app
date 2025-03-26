import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import Text from './Text';
import theme from '../theme';
import useRepositories from './hooks/useRepositories';
import RepositoryRenderItem from './RepositoryRenderItem';
import { ItemSeparator } from './ItemSeparator';

const RepositoryList = () => {
    const { repositories } = useRepositories();

    const repositoryNodes = repositories?.edges?.map(edge => edge.node) || [];

    return (
            <FlatList
                data={repositoryNodes}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({ item }) =>
                    <RepositoryRenderItem item={item} navigatable={true} />
                }
            />
    );
};

export default RepositoryList;