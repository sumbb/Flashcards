import React from 'react'
import {  Platform } from 'react-native'
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation' 
import { purple, white } from '../utils/colors'
import { FontAwesome, AntDesign } from '@expo/vector-icons'
import DeckList from './DeckList';
import AddDeck from './AddDeck'

const routeConfig = {
    Decks: {
      screen: DeckList,
      navigationOptions: {
        tabBarLabel: 'Decks',
        tabBarIcon: ({ tintColor }) => <AntDesign name='book' size={30} color={tintColor} />
      },
    },
    AddDeck: {
      screen: AddDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
      },
    }
  }
  
  const bottomTabNavigatorConfig = {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? purple : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : purple,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1
      }
    }
  }
  
  const Tabs = Platform.OS === 'ios' 
    ? createBottomTabNavigator(routeConfig, bottomTabNavigatorConfig)
    : createMaterialTopTabNavigator(routeConfig, bottomTabNavigatorConfig)
  
 export default Tabs 