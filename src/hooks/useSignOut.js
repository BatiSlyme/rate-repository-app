import { Alert } from "react-native";
import AuthStorage from "../utils/authStorage"
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-native";


export const useSignOut = () => {
    const client = useApolloClient();
    const navigate = useNavigate();

    const signOut = () => {
        Alert.alert(
            'Are you sure you want to sign out?',
            '',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Sign out cancelled'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: async () => {
                        try {
                            const authStorage = new AuthStorage();
                            await authStorage.removeAccessToken();
                            console.log('Signed out successfully');
                            client.resetStore();
                            navigate('/signIn');
                        } catch (error) {
                            console.log('Sign out error:', error);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };
    return { signOut };
}