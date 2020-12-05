import * as React from 'react';
import { View, Text, Button } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events Home Screen</Text>
      <Button
        onPress={() => navigation.push('Events2ndScreen')}
        title='Go Events 2nd Screen!'
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events 2nd Screen</Text>
      <Button
        onPress={() => navigation.push('Events3rdScreen')}
        title='Go Events 3rd Screen!'
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events 3rd Screen</Text>
      <Button onPress={() => navigation.popToTop()} title='Home'></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'orange',
      }}
    >
      <Stack.Screen name='EventsHome' component={EventsHomeScreen} />
      <Stack.Screen name='Events2ndScreen' component={EventsSecondScreen} />
      <Stack.Screen name='Events3rdScreen' component={EventsThirdScreen} />
    </Stack.Navigator>
  );
}
