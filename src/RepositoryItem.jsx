import { View, FlatList } from "react-native";
import { useParams } from 'react-router-native';
import useRepositoryById from "./hooks/useRepositoryById";
import RepositoryRenderItem from "./RepositoryRenderItem";
import { ItemSeparator } from "./ItemSeparator";
import Text from "./Text";
import ReviewItem from "./ReviewItem";

export const ReviewEmpty = () => (
    <View style={{ padding: 20, alignItems: "center" }}>
        <Text>No reviews yet.</Text>
    </View>
);

const RepositoryItem = () => {
    let { repositoryId } = useParams();
    const { data, loading, reviews, fetchMore, reviewsLoading } = useRepositoryById(repositoryId);
    console.log('length', reviews?.edges.length);
    const handleEndReach = () => {
        console.log('You have reached the end of the reviews list');
        fetchMore();
    };
    return (
        <>
            {loading
                ?
                <Text>Loading...</Text>
                : <>
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
                        ListEmptyComponent={ReviewEmpty}
                        onEndReached={handleEndReach}
                    />
                    {reviewsLoading && <Text>Loading more reviews...</Text>}
                </>
            }
        </>
    )
};

export default RepositoryItem;