import { createStackNavigator} from 'react-navigation' 
import { purple, white } from '../utils/colors'
import Tabs from './Tabs'
import Deck from './Deck'
import AddCard from './AddCard'
import Quiz from './Quiz'

const stackRouteConfig = {
    Tabs: {
        screen: Tabs,
        navigationOptions: {
          header: null
        }
      },
      Deck: {
        screen: Deck,
        navigationOptions: {
          headerTintColor: white,
          title: 'Deck',
          headerStyle: {
            backgroundColor: purple
          }
        }
      },
      AddCard: {
        screen: AddCard,
        navigationOptions: {
          headerTintColor: white,
          title: 'Add Card',
          headerStyle: {
            backgroundColor: purple
          }
        }
      },
      Quiz: {
        screen: Quiz,
        navigationOptions: {
          headerTintColor: white,
          title: 'Quiz',
          headerStyle: {
            backgroundColor: purple
          }
        }
      }
  }
  
  
  export default createStackNavigator(stackRouteConfig)