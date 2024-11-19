import { Link, router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Button from '../../components/button';
import { auth } from '../../config';


const onpressHandle = (email: string, password: string) : void => {
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential.user.uid);
        router.replace('/todo/list')
    }
    )
    .catch((error) => {
        const { code, message } = error;
        console.log(code, message);
        Alert.alert('Error', message);
    });

    // router.push('/todo/list')
}

const LogIn = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
 
        <View style={styles.container}>
 
             {/* <View style={styles.header}>
                <View style={styles.headerInner}>
                    <Text style={styles.headerTitle}>TODO app</Text>
                    <Text style={styles.headerRight}>LogOut</Text>
                </View>
             </View> */}
            {/* <Header /> */}
 
            <View style={styles.inner}>
                <Text style={styles.titles}>Log In</Text>
                <TextInput style={styles.input} 
                    value = {email} 
                    onChangeText={(text) => {setEmail(text)}} 
                    autoCapitalize='none' 
                    keyboardType='email-address' 
                    placeholder='Email Address' 
                    textContentType='emailAddress' />
                <TextInput style={styles.input} 
                    value = {password} 
                    onChangeText={(text) => {setPassword(text)}} 
                    autoCapitalize='none' 
                    secureTextEntry
                    placeholder='Password' 
                    textContentType='password' />
                {/* <View style={styles.button}>
                    <Text style={styles.buttonLabel}>Submit</Text>
                </View> */}
                <Button label = 'Submit'  onPress={()=>{onpressHandle(email, password)}}/>
                {/* <Button label="SignUp" onPress={() => {Alert.alert ('Pressed!')}}/> */}

                <View style={styles.footer}>
                    <Text style={styles.footerText}>Not registerd?</Text>
                    {/* <Link href- ' /auth/sign_up' > Sign Up here</Link> */}
                    <Link href='/auth/sign_up' asChild>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign up here</Text>
                        </TouchableOpacity>
                    </Link>
                    {/* <Link href='/auth/sign_up'>
                            <Text style={styles.footerLink}>Sign up here</Text>

                    </Link> */}
                </View>
 
            </View>
        </View>        
    )       
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8',
        //justifyContent: 'center',
        //alignItems: 'center'
    },
    inner: {
        paddingHorizontal: 24,
        paddingVertical: 27
    },
 
    titles: {
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
        marginBottom: 14
    },
 
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        height: 48,
        padding: 8,
        fontSize: 16,
        marginBottom: 16
 
    },
    button: {
        backgroundColor: '#467FD3',
        borderRadius: 4,
        // height: 48,
        // justifyContent: 'center',
        // alignItems: 'center',
        // width: '70%',
        alignSelf: 'flex-start',
        marginBottom: 24
    },
    buttonLabel: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 24
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})
 
export default LogIn