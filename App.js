import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import DeckList from './components/DeckList'
import { Constants } from 'expo'
import { purple } from './utils/colors'
import AddDeck from './components/AddDeck'

const decksArray = [
  {
    key: 'deck1',
    name: 'deck1',
    numOfCards: 10
  },
  { 
    key: 'deck2',
    name: 'deck2',
    numOfCards: 20
  },
  {
    key: 'deck3',
    name: 'deck3',
    numOfCards: 30
  },
  {
    key: 'deck4',
    name: 'deck4',
    numOfCards: 30
  },
  {
    key: 'deck5',
    name: 'deck5',
    numOfCards: 30
  },
  {
    key: 'deck6',
    name: 'deck6',
    numOfCards: 70
  },
  {
    key: 'deck7',
    name: 'deck7',
    numOfCards: 70
  },
  {
    key: 'deck8',
    name: 'deck8',
    numOfCards: 70
  }
]

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
        <AddDeck />
      </View>
    );
  }
}

