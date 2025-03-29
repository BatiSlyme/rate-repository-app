import useCurrentReviews from "./hooks/useCurrentReviews";
import Text from "./Text";
import { ReviewEmpty, ReviewItem } from "./RepositoryItem";
import { ItemSeparator } from "./ItemSeparator";
import { FlatList, View } from "react-native";

const MyReviews = () => {
    const { data, loading, error } = useCurrentReviews();
    console.log('MyReviews->reviews', reviews);

    const reviews = data ?? [];

    if (error) {
        return <Text>Something went wrong</Text>
    }

    if (loading) {
        return <Text>Loading...</Text>

    }

    return (
        <FlatList
            data={reviews}
            renderItem={({ item }) => <ReviewItem reviews={item} />}
            ItemSeparatorComponent={ItemSeparator}
            ListEmptyComponent={ReviewEmpty}
        />
    );
}

export default MyReviews;