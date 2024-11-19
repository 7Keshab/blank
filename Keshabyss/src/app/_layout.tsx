import { Stack } from "expo-router";
 
const layout = (): JSX.Element => {
    // return <Slot/>
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#79a8a9'
        },
        headerTintColor: '#fff',
        headerTitle: 'TODO app',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        }
    }}
    />
}
 
export default layout