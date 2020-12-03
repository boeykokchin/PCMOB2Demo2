import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ContactScreen from './screens/ContactScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { Ionicons } from '@expo/vector-icons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: 'orange',
        }}
      >
        <Tab.Screen
          name='Home'
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='home-outline'
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Events'
          component={EventsScreen}
          options={{
            tabBarLabel: 'Events',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='calendar-multiple-check'
                color={color}
                size={size}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Contact'
          component={ContactScreen}
          options={{
            tabBarLabel: 'Contact',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name='contacts'
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
