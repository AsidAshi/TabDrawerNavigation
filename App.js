import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import { DrawerContent } from './screens/DrawerContent';
import Icon from 'react-native-vector-icons/Ionicons'




const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const MyStack = ({navigation}) => {

  return (
    <Stack.Navigator   >
      <Stack.Screen name="Dashboard" component={MainTabScreen} options={{
        title: 'CRM OPERATION',
        headerStyle: {
          backgroundColor: '#fff',
          shadowColor: '#fff',
        },
        headerTintColor: 'red',
        headerTitleStyle: {
          fontWeight: 'bold'
        },

        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <Icon.Button
              name="ios-menu"
              size={35}
              color="#009387"
              backgroundColor="#fff"
              onPress={() => navigation.openDrawer()}
            />
          </View>
        ),

      }} />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={MyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
