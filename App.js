import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import { Constants } from 'expo'
import { purple } from './utils/colors'
import AddDeck from './components/AddDeck'
import Tabs from './components/Tabs'


function AppStatusBar({backgroundColor, ...props}) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar backgroundColor={backgroundColor} {...props}/>
    </View>
  )
}  

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
        <Tabs />
      </View>
    );
  }
}

