import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import DeckInList from './DeckInList'

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

class DeckList extends Component {

    onSelectDeck = (name) => {
        console.log(name)
        // TODO :: navigate to the selected Deck
    }

    renderItem = ({ item }) => {
        return (
            <DeckInList deck={item} onPress={this.onSelectDeck}/>
        )
    }

    footer = () => {
        return (
            <DeckInList deck={null}/>
        )
    }
    render() {
        const decks = decksArray
        return (
            <View>
                <FlatList 
                    data={decks}
                    renderItem={this.renderItem}
                    ListFooterComponent={this.footer}
                />
            </View>
        )    
    }
}

export default DeckList