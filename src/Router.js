import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, PostScreen, CategoriesScreen,CategoryScreen,MoreScreen}  from './screens';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MainProvider from './context/MainProvider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const BlogStack = () => {
    return (
        <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Category" component={CategoryScreen} />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
};

const Router = () => {
    return (
        <MainProvider>
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
                    <Tab.Screen options={{ title: 'Kategoriler' }} name="Categories" component={CategoriesScreen} />
                    <Tab.Screen options={{ title: 'Daha Fazla' }} name="More" component={MoreScreen} />
                </Tab.Navigator>
            </NavigationContainer>
        </MainProvider>
    );
};

export default Router;


function generateIcon(focused, color, route) {
    let iconName;

    switch (route.name) {
        case 'BlogStack':
            iconName = focused ? 'newspaper-variant-multiple' : 'newspaper-variant-multiple-outline';
            break;
        case 'Categories':
            iconName = focused ? 'folder-multiple' : 'folder-multiple-outline';
            break;
        case 'More':
            iconName = focused ? 'menu' : 'menu';
        break;

        default:
            break;
    }
    return <Icon name={iconName} color={color} size={30} />;
}