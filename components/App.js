
import 'react-native-gesture-handler';

import * as React from 'react';
import { Button, View, Text, TouchableOpacity, Image } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from './Dashboard';
import PostScreen from './PostScreen';
import ProfileScreen from './ProfileScreen';
import MessageScreen from './MessageScreen';
import Login from './Login';
import Signup from './SignUp';
import ForgotPassword from './ForgotPassword';
import PhoneLogin from './PhoneLogin';
import UserDetailScreen from './UserDetailScreen'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
    initialRouteName="Login"
    screenOptions={{
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: '#3740FE',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <Stack.Screen 
      name="Signup" 
      component={Signup} 
      options={{ title: 'Signup' }}
    />       
    <Stack.Screen 
      name="Login" 
      component={Login} 
      options={
        {title: 'Login'},
        {headerLeft: null} 
      }
    />
    <Stack.Screen 
     name="Dashboard" 
     component={Dashboard} 
     options={
       { title: 'Dashboard' },
       {headerLeft: null} 
     }
    />
    <Stack.Screen 
     name="ForgotPassword" 
     component={ForgotPassword} 
     options={
       { title: 'ForgotPassword' },
       {headerLeft: null} 
     }
    />
    <Stack.Screen 
     name="PhoneLogin" 
     component={PhoneLogin} 
     options={
       { title: 'PhoneLogin' },
       {headerLeft: null} 
     }
    />
    <Stack.Screen 
     name="UserDetailScreen" 
     component={UserDetailScreen} 
     options={
       { title: 'UserDetailScreen' },
       {headerLeft: null} 
     }
    />
  </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Post" component={PostScreen} options={{ title: 'Post Page' }}/>
    </Stack.Navigator>
  );
}
function DashBoardStack() {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#3740FE',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="Dashboard" component={Dashboard} options={{ title: Dashboard }}/>
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Dashboard"
        tabBarOptions={{
          activeTintColor: '#3740FE',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}  />
        <Tab.Screen
          name="PostScreen"
          component={SettingsStack}
          options={{
            tabBarLabel: 'Post',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={size} />
            ),
          }} />
          <Tab.Screen
          name="ProfileScreen"
          component={DashBoardStack}
          options={{
            tabBarLabel: 'Dashboard',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="settings" color={color} size={size} />
            ),
          }} />
          
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;