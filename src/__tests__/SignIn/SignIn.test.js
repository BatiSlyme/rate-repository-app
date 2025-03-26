import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import SignInContainer from '../../SignInContainer';
// ...
const onSubmit = jest.fn();

const mockFormik = {
    handleChange: jest.fn().mockImplementation((field) => (value) => {
        mockFormik.values[field] = value;
    }),
    handleBlur: jest.fn(),
    handleSubmit: jest.fn((e) => {
        onSubmit(mockFormik.values);
    }),
    values: {
        username: '',
        password: ''
    },
    touched: {
        username: false,
        password: false
    },
    errors: {
        username: '',
        password: ''
    }
};

describe('SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            // render the SignInContainer component, fill the text inputs and press the submit button
            render(<SignInContainer formik={mockFormik} />);
            // screen.debug();

            const usernameInput = screen.getByPlaceholderText('Username');
            const passwordInput = screen.getByPlaceholderText('Password');
            const signInButton = screen.getByText('Sign in');

            // Simulate user input
            fireEvent.changeText(usernameInput, 'kalle');
            fireEvent.changeText(passwordInput, 'password');

            // Simulate form submission
            fireEvent.press(signInButton);

            // Verify formik handleChange and handleSubmit were called
            expect(mockFormik.handleChange).toHaveBeenCalledWith('username');
            expect(mockFormik.handleChange).toHaveBeenCalledWith('password');

            // Verify input values
            expect(mockFormik.values.username).toBe('kalle');
            expect(mockFormik.values.password).toBe('password');

            // Verify formik handleSubmit was called
            await waitFor(() => {
                expect(mockFormik.handleSubmit).toHaveBeenCalledTimes(1);
                expect(onSubmit.mock.calls[0][0]).toEqual({
                    username: 'kalle',
                    password: 'password',
                });
            });
        });
    });
});