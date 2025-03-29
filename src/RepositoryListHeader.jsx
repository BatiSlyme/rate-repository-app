import { List } from "react-native-paper";
import SearchBox from "./SearchBox";
import { Pressable, View } from "react-native";

const RepositoryListHeader = ({ setSearchTerm, searchTerm, title, toggleVisibility }) => {
    return (
        <>
            <View style={{ padding: 10 }}>
                <SearchBox setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            </View>
            <Pressable onPress={toggleVisibility}>
                <List.Accordion
                    title={title}
                    style={{ backgroundColor: '#d3d3d3' }}
                    onPress={toggleVisibility} />
            </Pressable>
        </>
    )
}
export default RepositoryListHeader;