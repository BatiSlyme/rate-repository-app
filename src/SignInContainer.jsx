import { TextInput, View, Button } from "react-native";
import Text from "./Text";

const InputBox = ({ placeholder, value, formik, style }) => {
    return (
        <View>
            <TextInput
                style={{
                    borderColor: formik.touched[value] && formik.errors[value] ? '#d73a4a' : 'black',
                    borderWidth: 1,
                    padding: 10,
                    fontSize: 20,
                    ...style
                }}
                placeholder={placeholder}
                value={formik.values[value]}
                onChangeText={formik.handleChange(value)}
                onBlur={formik.handleBlur(value)}
            />
            {formik.touched[value] && formik.errors[value] && (
                <Text style={{ color: '#d73a4a' }}>{formik.errors[value]}</Text>
            )}
        </View>
    );
}

const SignInContainer = ({ formik }) => {
    return (
        <View style={{ backgroundColor: 'white', margin: 10, display: 'flex', flex: 1, gap: 10 }}>
            <InputBox placeholder='Username' style={{ color: 'blue' }} value='username' formik={formik} />
            <InputBox placeholder='Password' value='password' formik={formik} />
            <Button title='Sign in' onPress={formik.handleSubmit} />
        </View>
    )
}

export default SignInContainer;