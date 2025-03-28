import { View, Button } from "react-native";
import InputBox from "./commonComponents/InputBox";

const SignInContainer = ({ signUp, formik }) => {
    return (
        <View style={{ backgroundColor: 'white', margin: 10, display: 'flex', gap: 10 }}>
            <InputBox placeholder='Username' style={{ color: 'blue' }} value='username' formik={formik} />
            <InputBox placeholder='Password' value='password' formik={formik} />
            {signUp && <InputBox placeholder='Confirm Password' value='confirmPassword' formik={formik} />}
            <Button title={signUp ? 'Sign up' : 'Sign in'} onPress={formik.handleSubmit} />
        </View>
    )
}

export default SignInContainer;