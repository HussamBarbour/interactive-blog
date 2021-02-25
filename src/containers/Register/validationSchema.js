import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .email('geçerli bir e-mail girmeniz gerekiyor')
    .required('e-mail adresi zorunlu'),
  password: yup
    .string()
    .min(6, ({min}) => "Şifreniz en az 6 karakterden oluşmalıdır")
    .required('Şifrenizi giriniz'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Şifre tekrarı doğru değildir')
    .required('Şifrenizi tekrar giriniz'),
});

export default schema;