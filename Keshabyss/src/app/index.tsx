import { Redirect, router } from "expo-router"
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { Alert } from "react-native"
import { auth } from "../config"

const Index = () => {
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                router.replace('/todo/list')
                console.log('User is signed in')
                // Alert.alert('User is signed in')
            } else {
                console.log('User is signed out')
                // Alert.alert('User is signed out')
            }
        })
    }, [])
    // return <Redirect href="/todo/detail" />
    return <Redirect href="/auth/log_in" />

    // return <Redirect href="/auth/sign_up" />
}

export default Index