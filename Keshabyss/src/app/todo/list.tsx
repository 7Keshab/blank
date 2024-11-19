import { Feather } from '@expo/vector-icons'
import { router, useNavigation } from 'expo-router'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { type Todo } from '../../../types/todo'
import CircleButton from '../../components/circle_button'
import LogOut from '../../components/log_out'
import TodoListItem from '../../components/todoListItem'
import { auth, db } from '../../config'




const handlePress = (): void => {
    router.push('/todo/create')
}

const List = ():JSX.Element => {
    const [todos, setTodos] = useState<Todo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            // headerRight: () => { return <Text>Test</Text>}
            headerRight: () => { return <LogOut/>}
    })

    },[])
    useEffect(() => {
        if (auth.currentUser === null) { return }
        const ref = collection(db, 'user/$(auth.currentUser.uid)/todos')
        const q = query(ref, orderBy('updatedAt', 'desc'))

        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remoteTodos: Todo[] = []
            snapshot.forEach((doc) => {
                // console.log('todo', doc.id)
                // console.log('todo', doc.data())
                const {bodyText, updatedAt} = doc.data()
                    remoteTodos.push({
                        id: doc.id,
                        bodyText: bodyText,
                        updatedAt: updatedAt
                        // bodyText: doc.data().bodyText,
                        // updatedAt: doc.data().updatedAt.toDate()
                    })
                })
            setTodos(remoteTodos)
        })
        return unsubscribe
    },[])
    return (
 
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => <TodoListItem todo ={ item }/>}
            />
                        
            <CircleButton onPress={handlePress}>
                <Feather name='plus' size={40} color="#ffffff" />
            </CircleButton>
                    
        </View>
 
    ) 
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
        // backgroundColor: 'pink'
    },
 
    todoListItem: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.15)'
 
    },
    todoListItemTitle: {
        fontSize: 16,
        lineHeight: 24
    },
    todoListItemDate: {
        fontSize: 12,
        lineHeight: 18,
        color: '#000000'
    },
    circleButton:{
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#467FD3',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 40,
        bottom: 40,
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 8},
        shadowOpacity: 0.75,
        shadowRadius: 8,
        elevation: 8
    },
    circleButtonLabel: {
        color: '#ffffff',
        fontSize: 40,
        lineHeight: 48,
        textAlign: 'center'
    }   
 
})
 
export default List