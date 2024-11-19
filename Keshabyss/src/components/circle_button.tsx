import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
 
 
interface Props {
    children: JSX.Element
    style?: ViewStyle
    onPress?: () => void
}




const CircleButton = (props:Props):JSX.Element => {
    const {children, style, onPress} = props
    // console.log('CircleButton')
    return (
        <TouchableOpacity onPress={onPress} style = {[styles.circleButton, style]}>
            {/* {console.log('CircleButton2')} */}
            <Text style = {styles.circleButtonLabel}>{children}</Text>
        </TouchableOpacity>
    )  
 
}
 
const styles = StyleSheet.create({
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
 
export default CircleButton