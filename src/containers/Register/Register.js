import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Input, Button, Header } from '../../components';
import styles from './styles';
import global_styles from '../../styles/global';
import { Formik } from 'formik';
import validationSchema from './validationSchema';

const initialFormValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export function Register({ loading,onSubmit }) {
    return (
        <SafeAreaView style={global_styles.page_container}>
            <Header title='Kayıt Ol' />
            <Formik
                validationSchema={validationSchema}
                initialValues={initialFormValues}
                onSubmit={onSubmit}>
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                }) => (
                    <View style={[styles.container, global_styles.top_space]}>

                        <Input
                            onChangeText={handleChange('first_name')}
                            onBlur={handleBlur('first_name')}
                            value={values.first_name}
                            isTouched={touched.first_name}
                            placeholder='Adınız..' />
                        <Input
                            onChangeText={handleChange('last_name')}
                            onBlur={handleBlur('last_name')}
                            value={values.last_name}
                            isTouched={touched.last_name}
                            placeholder='Soyadınız..' />
                        <Input
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            error={errors.email}
                            isTouched={touched.email}
                            placeholder='E-mail adresiniz..'
                            autoCapitalize="none"
                            keyboardType="email-address" />

                        <Input
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            error={errors.password}
                            isTouched={touched.password}
                            placeholder='Şifreniz..'
                            autoCapitalize="none"
                            secureTextEntry
                        />

                        <Input
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            error={errors.confirmPassword}
                            isTouched={touched.confirmPassword}
                            placeholder='Şifrenizi tekrar giriniz..'
                            autoCapitalize="none"
                            secureTextEntry
                        />
                        <Button loading={loading} onPress={handleSubmit} label='Kayıt Ol' />
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    );
}
