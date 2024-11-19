import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';
import CircleButton from '../../components/circle_button';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView';
import { auth, db } from '../../config';


const handlePress = (bodyText: String): void => {
    console.log('Pressed')
    if (auth.currentUser === null) { return }
    const ref = collection(db, 'user/$(auth.currentUser.uid)/todos')
    addDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then((docRef) => {
        console.log('Done', docRef.id);
        Alert.alert('Done')
        router.back()
    })
    .catch((error) => {
        console.error('Error ', error);
        Alert.alert('Error', error.message)
    })
}


const Create = (): JSX.Element => {
    const [bodyText, setBodyText] = useState('')
    return (
        <KeyboardAvoidingView style = {styles.container}>

            <View style={styles.inputContainer}>
            
                <TextInput 
                style={styles.input} 
                multiline 
                value = {bodyText} 
                onChangeText={(text) => { setBodyText(text)}} />
                {/* {console.log(bodyText)} */}
            </View>
            <CircleButton onPress={() => { handlePress(bodyText)}}>
                <Feather name='check' size={40} color='#ffffff' />
            </CircleButton>

        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputContainer: {
        flex: 1,
        padding: 24
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24
    }
})
export default Create