import React from 'react'
import { Image, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'

export default function LoginPage({ navigation }) {

    function handleNavigate() {
        navigation.navigate('Home Page')
    }

    return (
        <View style={styles.container}>
            <Image width={80} height={80} style={styles.logo} source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg'}} />
            
            <Text style={styles.welcomeBack}>
                Welcome Back
            </Text>

            <View>
                <TextInput style={styles.input} placeholder='Ismingizni Kiriting' />
                <TextInput style={styles.input} placeholder='Pozitsiyangizni kiriting' />
                <TextInput secureTextEntry={true} style={styles.input} placeholder='Parolingizni kiriting' />

                <Text style={styles.forgotPassword}>
                    Forgot Password
                </Text>

                <Pressable onPress={handleNavigate} style={styles.login}>
                    <Text style={styles.loginText}>Login</Text>
                </Pressable>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    loginText: {
        fontFamily: 'sans-serif',
        color: "white",
        textAlign: 'center'
    },

    login: {
        paddingBottom: '15px',
        paddingTop: '15px',
        paddingRight: '25px',
        paddingLeft: '25px',
        width: '100%',
        backgroundColor: '#1e90ff',
        borderRadius: '3px',
    },

    forgotPassword: {
        color:'#15608d',
        fontSize: '15px',
        fontWeight: '500',
        fontFamily: 'sans-serif',
        textAlign: 'right',
        marginBottom: '10px'
    },

    logo: {
        width: '80px',
        height: '80px',
        objectFit: 'contain',
        marginBottom: '20px'
    },
    
    input: {
        backgroundColor: 'white',
        paddingBottom: '10px',
        paddingTop: '10px',
        paddingRight: '20px',
        paddingLeft: '20px',
        borderRadius: '5px',
        marginBottom: '10px',
        minWidth: '250px',
        borderColor: '#eee',
        borderWidth: '1px'
    },  

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    welcomeBack: {
        marginBottom: '20px',
        fontSize: '20px',
        fontWeight: '600',
        color: '#0047ab'
    }
})