import { View, Pressable, Image, StyleSheet, Button } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { useNavigate } from 'react-router-native';
import * as Linking from 'expo-linking';

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

const RepositoryRenderItem = ({ item, navigatable }) => {
    const navigate = useNavigate();
    const navigateToItem = () => {
        navigate(`/${item.id}`);
    };
    const openURL = async (url) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                const opened = await Linking.openURL(url);
                console.log('opened', opened);
            } else {
                console.error(`Don't know how to open this URL: ${url}`);
            }
        } catch (error) {
            console.error('An error occurred', error);
        }
    };
    return (
        <>
            {
                navigatable
                    ?
                    <Pressable onPress={navigateToItem}>
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
                    </Pressable>
                    :
                    < View style={styles.container} >
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
                        <Button title='Open in GitHub' onPress={() => { openURL(item.url) }} ></Button>
                    </View >
            }</>
    );
}
export default RepositoryRenderItem;