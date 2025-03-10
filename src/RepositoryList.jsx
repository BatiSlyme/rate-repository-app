import { FlatList, View, StyleSheet, Pressable, Image } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useState } from 'react';
import Text from './Text';
import theme from '../theme';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
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

const repositories = [
    {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1589,
        stargazersCount: 21553,
        ratingAverage: 88,
        reviewCount: 4,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/4060187?v=4',
    },
    {
        id: 'rails.rails',
        fullName: 'rails/rails',
        description: 'Ruby on Rails',
        language: 'Ruby',
        forksCount: 18349,
        stargazersCount: 45377,
        ratingAverage: 100,
        reviewCount: 2,
        ownerAvatarUrl: 'https://avatars1.githubusercontent.com/u/4223?v=4',
    },
    {
        id: 'django.django',
        fullName: 'django/django',
        description: 'The Web framework for perfectionists with deadlines.',
        language: 'Python',
        forksCount: 21015,
        stargazersCount: 48496,
        ratingAverage: 73,
        reviewCount: 5,
        ownerAvatarUrl: 'https://avatars2.githubusercontent.com/u/27804?v=4',
    },
    {
        id: 'reduxjs.redux',
        fullName: 'reduxjs/redux',
        description: 'Predictable state container for JavaScript apps',
        language: 'TypeScript',
        forksCount: 13902,
        stargazersCount: 52869,
        ratingAverage: 0,
        reviewCount: 0,
        ownerAvatarUrl: 'https://avatars3.githubusercontent.com/u/13142323?v=4',
    },
];

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {

    const [showItem, setShowItem] = useState(null);
    return (
        <>
            {showItem
                ?
                <RepositoryItem item={showItem} setShowItem={setShowItem} />
                :
                <FlatList
                    data={repositories}
                    ItemSeparatorComponent={ItemSeparator}
                    renderItem={({ item }) =>
                        <Pressable onPress={() => setShowItem(item)}>
                            {/* <SafeAreaView style={styles.container}>  */}
                            <View style={styles.container}>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', gap: 10 }}>
                                    <Image style={styles.logo} source={{
                                        uri: item.ownerAvatarUrl,
                                    }} />
                                    <View style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', maxWidth: '90%', rowGap: 10 }}>
                                        <Text color={'textPrimary'} fontWeight={'bold'} fontSize={'heading'}>{item.fullName}</Text>
                                        <Text color={'textSecondary'} fontSize={'body'}>{item.description}</Text>
                                        <View style={{ maxWidth: '40%' }}><Text color={'textPrimary'} style={{ backgroundColor: theme.colors.primary }}>{item.language}</Text></View>
                                    </View>
                                </View>

                                <Text>stargazersCount:{item.stargazersCount}</Text>
                                <Text>reviewCount:{item.reviewCount}</Text>
                                <Text>ratingAverage:{item.ratingAverage}</Text>
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