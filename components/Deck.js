import React, { Component } from 'react'
import { View, Text, StyleSheet, Animated } from 'react-native'
import { gray, black, white, red } from '../utils/colors'
import AppButton from './AppButton'
import { connect } from 'react-redux'
import { formatDeck } from '../utils/helper';

class Deck extends Component {

    state = {
        opacity: new Animated.Value(0)
    }

    onAddCard = ({ deck }) => {
        this.props.navigation.navigate(
            'AddCard',
            { deck: deck }
        )
    }

    onStartQuiz = ({ deck }) => {
        console.log("Start quiz for: ", deck.title)
        this.props.navigation.navigate(
            'Quiz',
            { deck: deck }
        )
    }

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            {
                toValue: 1,
                duration: 10000
            }
        ).start()
    }

    render() {
        const { deck } = this.props
        const { opacity } = this.state

        return (
            <Animated.View style={[styles.container, {opacity}]}>
                <View style={{marginTop: 50}}>
                    <Text style={styles.deckText}>{deck.title}</Text>
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
                </View>
            </Animated.View>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { deck } = navigation.state.params

    return {
        deck: formatDeck(decks[deck.title])
    }
}

export default connect(mapStateToProps)(Deck)

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
})