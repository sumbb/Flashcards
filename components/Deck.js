import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { gray, black, white, red } from '../utils/colors'
import AppButton from './AppButton'

function Btn({ onPress, btnStyle, btnTextStyle, text, deck }) {
    return (
        <TouchableOpacity
         style={btnStyle}
         onPress={() => onPress(deck)}>
             <Text style={btnTextStyle}>{text}</Text>
        </TouchableOpacity>
    )
}

class Deck extends Component {

    onAddCard = ({ deck }) => {
        console.log("Add card to: " , deck.name)
        // TODO : navigate to the Addcard 
    }

    onStartQuiz = ({ deck }) => {
        console.log("Start quiz for: ", deck.name)
        // TODO : navigate to the Quiz
    }

    onDeleteCard = ({ deck }) => {
        console.log("Delete the Deck: ", deck.name)
        // TODO : update the db
        // TODO : update the store
        // TODO : navigate to goBack
    }

    render() {
        const { deck } = this.props
        return (
            <View style={styles.container}>
                <View style={{marginTop: 50}}>
                    <Text style={styles.deckText}>{deck.name}</Text>
                    <Text style={styles.deckCardtext}>{`${deck.numOfCards} cards`}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <AppButton
                        onPress={this.onAddCard}
                        isDisabled={false}
                        btnStyle={styles.addCardBtn}
                        btnTextStyle={styles.addCardBtnText} 
                        text={'Add Card'} 
                        deck={deck}
                    />
                    <AppButton 
                        onPress={this.onStartQuiz} 
                        isDisabled={false}
                        btnStyle={styles.startQuizBtn}
                        btnTextStyle={styles.startQuizBtnText} 
                        text={'Start Quiz'} 
                        deck={deck}
                    />
                    <AppButton 
                        onPress={this.onDeleteCard}
                        isDisabled={false}
                        btnStyle={styles.deleteBtn}
                        btnTextStyle={styles.deleteBtnText} 
                        text={'Delete Card'} 
                        deck={deck}
                    />
                </View>
            </View>
        )
    }
}

export default Deck

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,    
        padding: 30
    },
    deckText: {
        fontSize: 40,
        paddingBottom: 10
    },
    deckCardtext: {
        color: gray,
        fontSize: 20
    },
    btnContainer: {
        flex: 1,
        backgroundColor: white,
        marginTop: 150
    },
    addCardBtn: {
        backgroundColor: white,
        borderRadius: 7,
        borderWidth: 1,
        height: 48,
        marginLeft: 40,
        marginRight: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    addCardBtnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center'
    },
    startQuizBtn: {
        backgroundColor: black,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: white,
        height: 48,
        marginLeft: 40,
        marginRight: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    startQuizBtnText: {
        color: black,
        fontSize: 22,
        color: white,
        textAlign: 'center'
    },
    deleteBtn: {
        backgroundColor: white,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: black,
        height: 48,
        marginLeft: 40,
        marginRight: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    deleteBtnText: {
        color: black,
        fontSize: 22,
        color: red,
        textAlign: 'center'
    }
})