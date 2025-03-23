import { FlatList, View, StyleSheet, Pressable, Image } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useEffect, useState } from 'react';
import Text from './Text';
import theme from '../theme';
import useRepositories from './hooks/useRepositories';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    separator: {
        height: 10,
    },
    logo: {
        width: theme.logo.width,
        height: theme.logo.height
    },
});

const Info = ({ main, info }) => {
    return (
        <View style={{ display: 'flex', alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold' }}>{main}</Text>
            <Text>{info}</Text>
        </View>)
}

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
    const { repositories } = useRepositories();
    // console.log( repositories);

    // Get the nodes from the edges array
    const repositoryNodes = repositories
        ? repositories.edges.map(edge => edge.node)
        : [];

    const [showItem, setShowItem] = useState(null);
    return (
        <>
            {showItem
                ?
                <RepositoryItem item={showItem} setShowItem={setShowItem} />
                :
                <FlatList
                    data={repositoryNodes}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => setShowItem(item)}>
                            {/* <SafeAreaView style={styles</View>.container}>  */}
                            <View style={styles.container}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 10 }}>
                                    <Image style={styles.logo} source={{
                                        uri: item.ownerAvatarUrl,
                                    }} />
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '90%', rowGap: 10 }}>
                                        <Text color={'textPrimary'} fontWeight={'bold'} fontSize={'heading'}>{item.fullName}</Text>
                                        <Text color={'textSecondary'} fontSize={'body'}>{item.description}</Text>
                                        <Text color={'textPrimary'} style={{ backgroundColor: theme.colors.primary, color: 'white', alignSelf: 'flex-start' }}>{item.language}</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', margin: 10 }}>
                                    <Info main={Math.round(item.stargazersCount / 1000) + 'k'} info='stars' />
                                    <Info main={Math.round(item.forksCount / 1000) + 'k'} info='forks' />
                                    <Info main={item.reviewCount} info='revies' />
                                    <Info main={item.ratingAverage} info='rating' />
                                </View>
                            </View>
                            {/* </SafeAreaView> */}
                        </Pressable>
                    }
                // other props
                />}
        </>
    );
};

export default RepositoryList;