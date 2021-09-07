import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'
import IconA from 'react-native-vector-icons/MaterialCommunityIcons';
import AppStyles from '../AppStyles'
import OrderScreen from './OrderScreen';
import Dashboard from './Dashboard';
import Tab3Screen from './Tab3Screen';
import ProfileScreen from './ProfileScreen';




const DashboardStack = createStackNavigator();
const OrderStack = createStackNavigator();
const Tab3Stack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (

    <Tab.Navigator >

        <Tab.Screen
            name="Dashboard"
            component={DashboardStackScreen}
            options={{
                tabBarLabel: 'Dashboard',
                tabBarColor: AppStyles.Color.bottomTabColor,
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-home" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Order"
            component={OrderStackScreen}
            options={{
                tabBarLabel: 'Orders',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <IconA name="order-bool-descending-variant" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Tab3"
            component={Tab3StackScreen}
            options={{
                tabBarLabel: 'Tab3',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="briefcase-sharp" color={color} size={26} />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={ProfileStackScreen}
            options={{
                tabBarLabel: 'Profile',
                tabBarColor: '#009387',
                tabBarIcon: ({ color }) => (
                    <Icon name="ios-person" color={color} size={26} />
                ),
            }}
        />

    </Tab.Navigator>

)

export default MainTabScreen;

const DashboardStackScreen = ({ navigation }) => {

    return (
        <DashboardStack.Navigator>
            <DashboardStack.Screen name='Dashboard' component={Dashboard}  options={{headerShown:false  }}  />

        </DashboardStack.Navigator>

    )
}

const OrderStackScreen = ({ navigation }) => {
    return (

        <OrderStack.Navigator>
            <OrderStack.Screen name='OrderScreen' component={OrderScreen} options={{headerShown:false  }} />
        </OrderStack.Navigator>
    )

}



const Tab3StackScreen = ({ navigation }) => {
    return (

        <Tab3Stack.Navigator >
            <Tab3Stack.Screen name='CRM OPERATION' component={Tab3Screen} options={{headerShown:false  }}  />
        </Tab3Stack.Navigator>
    )

}


const ProfileStackScreen = ({ navigation }) => {
    return (

        <ProfileStack.Navigator >
            <ProfileStack.Screen name='CRM OPERATION' component={ProfileScreen} options={{headerShown:false  }} />
        </ProfileStack.Navigator>
    )

}
