import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RectButton } from 'react-native-gesture-handler';

import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDtailsSceens';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return  (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="cart" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainStackNavigator;