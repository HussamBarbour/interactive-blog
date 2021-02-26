import React from 'react'
import { SafeAreaView, View } from 'react-native'
import { Input, Button, Header } from '../../components';
import styles from './styles';
import global_styles from '../../styles/global';
import { Formik } from 'formik';
import validationSchema from './validationSchema';

const initialFormValues = {
    email: '',
    password: '',
};

export function Login({loading, onSubmit}){
    return(
        <SafeAreaView style={global_styles.page_container}>
            <Header title='Giriş Yap' />
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

                        <Button loading={loading} onPress={handleSubmit} label='Giriş Yap' />
                    </View>
                )}
            </Formik>

        </SafeAreaView>
    )
}