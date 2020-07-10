import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Footer } from './components/bottom.js'
import { Header } from './components/headers'
import { Profile } from './screens/profile'
import { Lock } from './screens/lock'
import { Help } from './screens/help'
import { Settings } from './screens/settings'
import { Record } from './screens/records'

import { Login } from './screens/login'
import  {Landing}  from './screens/landing'


const Page = (props) => {
  return (
    <>
      <Profile active={props.active} />
      <Lock active={props.active} />
      <Help active={props.active} />
      <Settings active={props.active} />
      <Record active={props.active} />
    </>
  );
}

function MainApp() {

  let [active, setActive] = useState("profile")
  let switcher = (e) => {
    setActive(e)
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Page active={active} />
      <Footer switch={(e) => switcher(e)} />

    </View>
  );
}



const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Land">
      <Stack.Screen name="Main" component={MainApp} />
      <Stack.Screen name="Land" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
