import { router } from 'expo-router'
import { signOut } from 'firebase/auth'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { auth } from '../config'



const handlePress = (): void => {
    signOut(auth)
    .then(() => {
        console.log('Signed out')
        router.replace('/auth/log_in')
    })
    .catch((error) => {
        // const { code, message } = error
        // console.log(code, message)
        Alert.alert('Logout Failed', error.message)
    })
}


const LogOut = (): JSX.Element => {
    return (
        <TouchableOpacity onPress={handlePress}>           
                <Text style= {styles.text}>Log Out </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    text: {
        // color: '#ffffff',
        flex: 1,
        fontSize: 16,
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'rgba(255, 255, 255, 0.8)'
    }
})
export default LogOut