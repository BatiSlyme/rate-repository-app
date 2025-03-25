import { Button, Text, View } from "react-native";

const RepositoryItem = ({ item, setShowItem }) => {
    return (
        <View testID={'repositoryItem'}>
            <Text>fullName:{item.fullName}</Text>
            <Text>description:{item.description}</Text>
            <Text>language:{item.language}</Text>
            <Text>stargazersCount:{item.stargazersCount}</Text>
            <Text>reviewCount:{item.reviewCount}</Text>
            <Text>ratingAverage:{item.ratingAverage}</Text>
            <Button title="Back" onPress={() => setShowItem(null)} />
        </View>

    )
};

export default RepositoryItem;