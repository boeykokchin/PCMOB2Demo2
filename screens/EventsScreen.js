import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { StackActions } from '@react-navigation/native';

function EventsHomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events 1st Page!</Text>
      <Button
        onPress={() => navigation.navigate('Events2nd')}
        title='Goto 2nd Screen'
      ></Button>
    </View>
  );
}

function EventsSecondScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events 2nd Page!</Text>
      <Button
        onPress={() => navigation.navigate('Events3rd')}
        title='Goto 3rd Screen'
      ></Button>
    </View>
  );
}

function EventsThirdScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Events 3rd Page!</Text>
      <Button
        onPress={() => navigation.dispatch(StackActions.popToTop())}
        title='Home'
      ></Button>
    </View>
  );
}

const Stack = createStackNavigator();

export default function EventsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Events1st' component={EventsHomeScreen} />
      <Stack.Screen name='Events2nd' component={EventsSecondScreen} />
      <Stack.Screen name='Events3rd' component={EventsThirdScreen} />
    </Stack.Navigator>
  );
}
