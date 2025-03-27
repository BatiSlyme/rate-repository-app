import { TextInput, View } from "react-native";
import Text from "../Text";

const InputBox = ({ placeholder, value, formik, styles, multiline }) => {
    return (
        <View>
            <TextInput
                style={{
                    borderColor: formik.touched[value] && formik.errors[value] ? '#d73a4a' : 'black',
                    borderWidth: 1,
                    padding: 10,
                    fontSize: 20,
                    ...styles
                }}
                placeholder={placeholder}
                value={formik.values[value]}
                onChangeText={formik.handleChange(value)}
                onBlur={formik.handleBlur(value)}
                multiline={multiline}
            />
            {formik.touched[value] && formik.errors[value] && (
                <Text style={{ color: '#d73a4a' }}>{formik.errors[value]}</Text>
            )}
        </View>
    );
}

export default InputBox;