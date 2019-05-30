import React from 'react';
import { View, StatusBar } from 'react-native';
import { Constants } from 'expo'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import { purple } from './utils/colors'
import Stacks from './components/Stacks'

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
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar backgroundColor={purple} barStyle='light-content'/>
          {/* <Quiz title={data.title} questions={data.questions}/> */}
          <Stacks />
        </View>
      </Provider> 
    );
  }
}


