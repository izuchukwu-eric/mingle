import FeedScreen from "../screens/FeedScreen"
import CreatePostScreen from "../screens/CreatePostScreen";
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"


const Stack = createNativeStackNavigator();

const Navigatior = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Feed" component={FeedScreen} />
                <Stack.Screen name="Create Post" component={CreatePostScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigatior