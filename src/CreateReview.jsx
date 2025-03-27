import { useFormik } from "formik";
import InputBox from "./commonComponents/InputBox";
import { Button, View } from "react-native";
import * as yup from 'yup';
import useCreateReview from "./hooks/useCreateReview";
import Text from "./Text";

const validationSchema = yup.object().shape({
    repositoryOwnerName: yup
        .string()
        .min(3, 'Repository Owner Name must be longer or equal to 3')
        .required('Repository Owner Name is required'),
    repositoryName: yup
        .string()
        .min(4, 'Repository Name must be longer or equal to 4')
        .required('Repository Name is required'),
    rating: yup.number().required().min(0).max(100),
    review: yup.string()
});

const initialValues = {
    repositoryOwnerName: '',
    repositoryName: '',
    rating: '',
    review: ''
};
const CreateReview = () => {
    const { error, createReview } = useCreateReview();

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: async (values) => {
            try {
                await createReview({
                    ownerName: values.repositoryOwnerName,
                    repositoryName: values.repositoryName,
                    rating: parseInt(values.rating, 10),
                    text: values.review
                });
            } catch (error) {
                console.log(error);
            }

        }
    });
    return (
        <View style={{ backgroundColor: 'white', margin: 10, display: 'flex', gap: 10 }}>
            <InputBox placeholder='Repository Owner Name' style={{ color: 'blue' }} value='repositoryOwnerName' formik={formik} />
            <InputBox placeholder='Repository Name' value='repositoryName' formik={formik} />
            <InputBox placeholder='Rating between 0 and 100' value='rating' formik={formik} />
            <InputBox placeholder='Review' value='review' formik={formik} multiline />
            <Button title='Create a review' onPress={formik.handleSubmit} />
            {error && <Text style={{ color: '#d73a4a' }}>{error}</Text>}
        </View>
    );
}

export default CreateReview;