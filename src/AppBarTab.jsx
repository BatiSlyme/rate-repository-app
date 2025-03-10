import { Pressable, Text } from "react-native";
import theme from "../theme";

const AppBarTab = ({ text, onPress }) => {

    return (
        <Pressable onPress={() => { }}>
            <Text style={theme.cotnainerText}>{text}</Text>
        </Pressable>
    )
}

export default AppBarTab;