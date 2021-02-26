import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('geçerli bir e-mail adresi girmeniz gerekiyor')
    .required('Bu alan boş bırakılamaz'),
  password: yup
    .string()
    .min(6, ({min}) => "Şifreniz en az 6 karakterden oluşmalıdır")
    .required('Bu alan boş bırakılamaz'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifre tekrarı doğru değildir')
    .required('Bu alan boş bırakılamaz'),
});

export default schema;