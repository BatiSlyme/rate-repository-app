import { Pressable, Text } from "react-native";
import theme from "../theme";

const AppBarTab = ({ text }) => {

    return (
        <Text style={theme.cotnainerText}>{text}</Text>
    )
}

export default AppBarTab;