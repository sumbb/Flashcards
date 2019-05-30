import React, { Component } from 'react'
import { View, FlatList, AsyncStorage } from 'react-native'
import DeckInList from './DeckInList'
import { connect } from 'react-redux'
import { getDecks } from '../utils/api'
import { addDecks } from '../actions';
import { formatDeckWithKey } from '../utils/helper';

class DeckList extends Component {

    componentDidMount() {
      const { dispatch } = this.props
      getDecks()
        .then((decks) => dispatch(addDecks(decks)))

    }

    onSelectDeck = (deck) => {
        this.props.navigation.navigate(
          'Deck',
          { deck: deck } 
        )
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
        const { decks } = this.props
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
function mapStateToProps(decks) {
  return {
      decks : Object.keys(decks).map((key) =>  formatDeckWithKey(decks[key]))
  }
}

export default connect(mapStateToProps)(DeckList)