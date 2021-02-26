import * as yup from 'yup';

const schema = yup.object().shape({
    email: yup
        .string()
        .email('geçerli bir e-mail adresi girmeniz gerekiyor')
        .required('Bu alan boş bırakılamaz'),
    password: yup.string().required('Bu alan boş bırakılamaz'),

});

export default schema;