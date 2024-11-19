import { StyleSheet, Text, View } from 'react-native';


const Header = (): JSX.Element => {
    return (
        <View style={styles.header}>
            <View style={styles.headerInner}>
                <Text style={styles.headerTitle}>TODO app</Text>
                <Text style={styles.headerRight}>LogOut</Text>
            </View>
        </View>      
    )       
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#79a8a9',
        //backgroundColor: 'pink',
        height:104,
        justifyContent: 'flex-end'
    },
    headerInner: {
        alignItems: 'center',
    },
    headerRight: {
        position: 'absolute',
        right: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.8)'
    },
    headerTitle: {
        fontSize: 24,
        marginBottom: 8,
        lineHeight: 32,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    headerLeft: {
        position: 'absolute',
        textAlignVertical: 'center',
        left: 16,
        bottom: 16,
        color: 'rgba(255, 255, 255, 0.8)'
    }

})
export default Header