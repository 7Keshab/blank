import { Feather } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { doc, getDoc, setDoc, Timestamp } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import CircleButton from '../../components/circle_button';
import KeyboardAvoidingView from '../../components/KeyboardAvoidingView';
import { auth, db } from '../../config';


const handlePress = (id:string, bodyText:string): void => {
    if (auth.currentUser === null) { return }
    const ref = doc(db, 'user/$(auth.currentUser.uid)/todos', id)
    setDoc(ref, {
        bodyText: bodyText,
        updatedAt: Timestamp.fromDate(new Date())
    })
    .then(() => {
        router.back()
    })
    .catch((error) => {
        console.log('Error', error)
    })
}
const Edit = () :JSX.Element=> {
    const id = String(useLocalSearchParams().id)
    const [bodyText, setBodyText] = useState('')
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = doc(db, 'user/$(auth.currentUser.uid)/todos', id)
        getDoc(ref)
        .then((docRef) => {
            console.log('doc', docRef.data())
            const RemoteBodyText = docRef.data()?.bodyText
            setBodyText(RemoteBodyText)
            })
        .catch((error) => {
            console.log('Error', error)
        })
    }, [])
    console.log('id@Edit_useEffect', id)
    return (
        <KeyboardAvoidingView style= {styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    multiline
                    style={styles.input}
                    value={bodyText}
                    onChangeText={(text) => setBodyText(text)}
                    autoFocus
                />
        </View>
        <CircleButton onPress={() => handlePress(id, bodyText)}>
            <Feather name="plus" size={40} color="#ffffff" />
        </CircleButton>
        </KeyboardAvoidingView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 27,
        paddingVertical: 32
    },
    input: {
        flex: 1,
        fontSize: 16,
        lineHeight: 24,
        textAlignVertical: 'top'
    }, 
    inputContainer: {
        flex: 1
    }
})


export default Edit;