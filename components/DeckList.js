import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import DeckInList from './DeckInList'

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

export default DeckList