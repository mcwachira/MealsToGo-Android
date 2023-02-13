import { Text } from "react-native";
import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import RestaurantScreen from "../../features/restaurant/screens/restaurant.screens";
import RestaurantDetailScreen from "../../features/restaurant/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator()

export const RestaurantNavigator = () => {
    return (
        <RestaurantStack.Navigator 
            screenOptions={{
                
                headerShown: false,
                ...TransitionPresets.forRevealFromBottomAndroid,
            }}>
            <RestaurantStack.Screen name='Restaurants'
            component={RestaurantScreen}/>

            <RestaurantStack.Screen name='RestaurantDetails'
                component={RestaurantDetailScreen}/>
        </RestaurantStack.Navigator>
    )
}