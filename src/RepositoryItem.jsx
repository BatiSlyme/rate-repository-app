import { Button, View, FlatList, StyleSheet } from "react-native";
import { useParams } from 'react-router-native';
import useRepositoryById from "./hooks/useRepositoryById";
import RepositoryRenderItem from "./RepositoryRenderItem";
import { ItemSeparator } from "./ItemSeparator";
import theme from "../theme";
import Text from "./Text";
import { format, compareAsc } from "date-fns";

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        gap: 10,
        maxWidth: '85%',
        margin: 10,
        height: 'auto',
        alignItems: 'flex-start' // Ensures alignment
    },
    circle: {
        borderRadius: 100,
        borderColor: theme.colors.primary,
        borderWidth: 2,
        width: '15%',
        aspectRatio: 1,
        alignSelf: "flex-start",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "bold",
        minHeight: 50 // Ensures consistent height

    },
    circleText: {
        fontSize: 20,
        color: theme.colors.primary
    },
    textContainer: { flex: 1 }
});

const ReviewItem = ({ reviews }) => {
    console.log('reviews', reviews);
    return (
        <View style={styles.container}>
            <View style={styles.circle}>
                <Text style={styles.circleText}>{reviews?.node?.rating}</Text>
            </View>
            <View style={styles.textContainer}>
                <Text fontWeight={'bold'} color={theme.colors.textPrimary}>{reviews?.node?.user?.username}</Text>
                <Text fontWeight={''} color={theme.colors.textSecondary}>{format(new Date(reviews?.node?.createdAt), "dd.MM.yyyy")}</Text>
                <Text>{reviews?.node?.text}</Text>
            </View>
        </View>
    );
};

const RepositoryItem = () => {
    let { repositoryId } = useParams();
    const { data, loading, reviews } = useRepositoryById(repositoryId);
    console.log('length', reviews?.edges.length);
    return (
        <>
            {loading
                ?
                <Text>Loading...</Text>
                :
                <FlatList
                    data={reviews?.edges}
                    renderItem={({ item }) => <ReviewItem reviews={item} />}
                    keyExtractor={({ node }) => node.id}
                    ItemSeparatorComponent={ItemSeparator}
                    ListHeaderComponent={
                        <>
                            <RepositoryRenderItem
                                item={data ?? []}
                                navigatable={false}
                            />
                            <ItemSeparator />
                        </>}
                    ListEmptyComponent={
                        <View style={{ padding: 20, alignItems: "center" }}>
                            <Text>No reviews yet.</Text>
                        </View>
                    }
                />
            }
        </>
    )
};

export default RepositoryItem;