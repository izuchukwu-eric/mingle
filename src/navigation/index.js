import FeedScreen from "../screens/FeedScreen"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator();

const Navigatior = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigatior