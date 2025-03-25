import { useFormik } from 'formik';
import { View, Button, TextInput, Text } from 'react-native';
import * as yup from 'yup';
import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInContainer from './SignInContainer';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username must be longer or equal to 7')
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

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await signIn({ username, password });
        navigate('/repositoryList');
      } catch (error) {
        formik.setErrors({ username: 'Invalid username or password', password: 'Invalid username or password' });
        console.log(error);
      }
    },
  });

  return (
    <SignInContainer formik={formik} />
  )
};

export default SignIn;