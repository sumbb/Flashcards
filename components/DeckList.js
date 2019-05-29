import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import DeckInList from './DeckInList'

class DeckList extends Component {

    renderItem = ({ item }) => {
        return (
            <DeckInList deck={item}/>
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