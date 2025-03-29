
import { Button, View, StyleSheet } from "react-native";
import { useNavigate } from 'react-router-native';
import theme from "../theme";
import Text from "./Text";
import { format } from "date-fns";
import useCreateReview from "./hooks/useReview";

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


const ReviewItem = ({ reviews, actions }) => {
    const navigate = useNavigate();
    const repositoryId = reviews?.node?.repository?.id;

    const { deleteReview } = useCreateReview();
    const handleDelete = async () => {
        try {
            await deleteReview(reviews?.node?.id);
        } catch (error) {
            console.log('Error deleting review:', error);
        }
    }
    // console.log('reviews', reviews);
    return (
        <>
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
            {
                actions && <View style={{ flexDirection: 'row', gap: 10, marginBottom: 20, justifyContent: "center" }}>
                    <Button title="View repository" onPress={() => navigate(`/${repositoryId}`)} />
                    <Button color={'red'} title="Delete review" onPress={handleDelete} />
                </View>
            }
        </>
    );
};

export default ReviewItem;