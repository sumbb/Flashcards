import React, { Component } from 'react'
import { View, Text, StyleSheet,  TouchableOpacity } from 'react-native'
import { white, purple, gray, red } from '../utils/colors'

class DeckInList extends Component {
    render() {
        const { deck, onPress } = this.props
        if(deck === null) {
            return (
                <View style={styles.footer}>
                    <Text style={{ fontSize: 20, color: purple }}>{"End of Decks"}</Text>
                </View>)
        } else {
            return (
                <View style={styles.item}>
                    <View style={styles.container}>
                        <TouchableOpacity onPress={() => onPress(deck)}>
                            <Text style={styles.deckText}>{deck.title}</Text>
                            <Text style={styles.deckCardtext}>{`${deck.numOfCards} cards`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>)
        }
    }
}

export default DeckInList;


const styles = StyleSheet.create({
    item: {
        backgroundColor: white,
        borderRadius: 16,
        borderWidth: 1,
        padding: 20,
        height: 150,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 7,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 3
          },
    },
    container: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: { 
        alignItems: 'center', 
        height: 200, 
        paddingTop: 50
    },
    deckText: {
        fontSize: 20,
        paddingBottom: 10
    },
    deckCardtext: {
        color: gray,
        fontSize: 15
    }

})   