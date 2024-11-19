import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// import Hello_0 from  './src/components/Hello_0'
// import Hello_1 from  './src/components/Hello_1'
//import Hello_2 from  './src/components/Hello_2'
import Hello from './src/components/hello';

const App = () : JSX.Element => {
  return (
    <View style={styles.container}>
      {/* <Hello_0 /> */}
      {/* <Hello_1>World</Hello_1> */}
      {/*<Hello>World</Hello> */}
      <Hello bang={true}>World</Hello>

      <Text >
         Open up App.tsx to start working on your app!!!
      </Text>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    backgroundColor: 'blue',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 16
  }
})

export default App