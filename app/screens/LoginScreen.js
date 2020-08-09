import React from 'react';
import Screen from '../components/Screen';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';
import { AppFromField, SubmitButton, AppForm } from '../components/forms';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

const LoginScreen = () => {

    return (
        <Screen style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <AppForm initialValues={{ email: '', password: '' }} 
                onSubmit={(values) => console.log(values)} 
                validationSchema={validationSchema}>
                <AppFromField
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    icon="email"
                    name="email"
                    textContentType="emailAddress"
                    placeholder="Email"
                />
                <AppFromField
                    autoCapitalize="none"
                    autoCorrect={false}
                    icon="lock"
                    name="password"
                    textContentType="password"
                    placeholder="Password"
                    secureTextEntry
                />
                <SubmitButton title="Login"  />
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo:{
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
});

export default LoginScreen;