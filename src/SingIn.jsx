import { useFormik } from 'formik';
import { View, Button, TextInput, Text } from 'react-native';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(7, 'Username must be longer or equal to 7')
    .required('Username is required'),
  password: yup
    .string()
    .min(8, 'Password must be longer or equal to 10')
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

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

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values.username, values.password);
    },
  });

  return (
    <View style={{ backgroundColor: 'white', margin: 10, display: 'flex', flex: 1, gap: 10 }}>
      <InputBox placeholder='Username' style={{ color: 'blue' }} value='username' formik={formik} />
      <InputBox placeholder='Password' value='password' formik={formik} />
      <Button title='Sign in' onPress={formik.handleSubmit} />
    </View>
  );
};



export default SignIn;