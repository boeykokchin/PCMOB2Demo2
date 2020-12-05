import * as React from 'react';
import { View, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Accordion,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Title,
} from 'native-base';

const Stack = createStackNavigator();

const dataArray = [
  {
    title: 'What is this?',
    content:
      'A party that is worth celebrating with poop for outgoing THIS administration!',
  },
  {
    title: 'Who is this by?',
    content: 'The NEW administration.',
  },
  {
    title: 'Why is this?',
    content: 'Because normal predictable must prevail!',
  },
];

function Home({ navigation }) {
  return (
    <Container>
      <Header>
        <Body>
          <Title>Poop Throwing Party 2021</Title>
        </Body>
      </Header>

      <Content>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://picsum.photos/200' }} />
              <Body>
                <Text>Monkey Thrump</Text>
                <Text note>December 25, 2020</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                style={{ width: '100%', flex: 1 }}
                source={require('../assets/pic1.png')}
              />
              <Text>
                Throw poop and celebrate the end of THIS administration at NYC
                square!
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent textStyle={{ color: '#87838B' }}>
                <Icon name='logo-github' />
                <Text>1,926 stars</Text>
              </Button>
            </Left>
          </CardItem>
        </Card>
        <Accordion
          dataArray={dataArray}
          headerStyle={{ backgroundColor: '#b7daf8' }}
          contentStyle={{ backgroundColor: '#ddecf8' }}
        />
      </Content>
    </Container>
  );
}

export default function HomeScreen() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'green',
        gestureEnabled: true,
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Welcome',
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}
