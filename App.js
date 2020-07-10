import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from './components/bottom.js'
import { Header } from './components/headers'
import { Profile } from './screens/profile'
import { Lock } from './screens/lock'
import { Help } from './screens/help'
import { Settings } from './screens/settings'
import { Record } from './screens/records'


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

export default function App() {

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
