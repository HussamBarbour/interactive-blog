import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
        .string()
        .required('Bu alan boş bırakılamaz'),
    password: yup.string().required('Bu alan boş bırakılamaz'),

});

export default schema;