import { useFormik } from 'formik';
import * as yup from 'yup';
import useSignIn from './hooks/useSignIn';
import { useNavigate } from 'react-router-native';
import SignInContainer from './SignInContainer';
import useSignUp from './hooks/useSignUp';

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(5, 'Username must be longer than 5')
    .max(30, 'Username must be shorter or equal to 30')
    .required('Username is required'),
  password: yup
    .string()
    .min(5, 'Password must be longer than 5')
    .max(50, 'Password must be shorter or equal to 50')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Password confirmation is required'),
});

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

const SignUp = () => {
  const [signIn] = useSignIn();
  const { signUp } = useSignUp();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { username, password } = values;
      try {
        await signUp({ username, password });
        await signIn({ username, password });
        navigate('/repositoryList');
      } catch (error) {
        formik.setErrors({ username: 'Invalid username or password', password: 'Invalid username or password' });
        console.log(error);
      }
    },
  });

  return (
    <SignInContainer signUp formik={formik} />
  )
};

export default SignUp;