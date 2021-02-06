import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, More, Category, Post } from './pages';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BlogStack = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Category" component={Category} />
            <Stack.Screen name="Post" component={Post} />
        </Stack.Navigator>
    );
};

const Router = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color }) =>
                    generateIcon(focused, color, route),
                })}
                tabBarOptions={{
                    activeTintColor: '#000000',
                    inactiveTintColor: '#cccccc',
                }}>
                <Tab.Screen options={{ title: 'Haberler' }} name="BlogStack" component={BlogStack} />
                <Tab.Screen options={{ title: 'Daha Fazla' }} name="More" component={More} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Router;


function generateIcon(focused, color, route) {
    let iconName;

    switch (route.name) {
        case 'BlogStack':
            iconName = focused ? 'newspaper-variant-multiple' : 'newspaper-variant-multiple-outline';
            break;
        case 'More':
            iconName = focused ? 'menu' : 'menu';
            break;

        default:
            break;
    }
    return <Icon name={iconName} color={color} size={30} />;
}