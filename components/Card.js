import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import AppButton from './AppButton'
import { white, black, red } from '../utils/colors'

class Card extends Component {

    render() {
        const {question, onCorrect, onIncorrect, totalCards, numOfAnswered, isQuestion, flipCard } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                <Text style={styles.topText}>{`${numOfAnswered+1}/${totalCards}`}</Text>
                    <Text style={styles.qaText}> {isQuestion ? `${question.question}` : `${question.answer}`}</Text>
                </View>
                <View style={styles.secondContainer}>
                    <AppButton 
                        onPress={flipCard}
                        btnStyle={styles.showBtn}
                        btnTextStyle={styles.btnTextStyle} 
                        text={isQuestion ? `Show Answer` : `Show Question`}
                    />
                    {   !isQuestion && <AppButton
                                            onPress={onCorrect}
                                            btnStyle={styles.correctBtn}
                                            btnTextStyle={styles.correctBtnText} 
                                            text={'Correct'}
                                        />
                    }
                    { !isQuestion &&  <AppButton
                                            onPress={onIncorrect}
                                            btnStyle={styles.inCorrectBtn}
                                            btnTextStyle={styles.inCorrectBtnText} 
                                            text={'Incorrect'}
                                        />
                    }
                    
                </View>
            </View>
        )
    }
}

export default Card

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 10   
    },
    correctBtn: {
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
    correctBtnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center'
    },
    inCorrectBtn: {
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
    inCorrectBtnText: {
        color: black,
        fontSize: 22,
        color: white,
        textAlign: 'center'
    },
    topText: {
        fontSize: 25,
        paddingBottom: 10
    },
    firstContainer: {
        flex: 3,
        alignItems: 'center'
    },
    secondContainer: {
        alignItems: 'center',
        marginBottom: 40,
        flex: 2
    },
    qaText: {
        fontSize: 35,
        marginBottom: 20
    },
    btnTextStyle: {
        color: red,
        fontSize: 25
    },
    showBtn: {
        backgroundColor: white,
        borderRadius: 7,
        borderWidth: 1,
        borderColor: red,
        height: 48,
        marginLeft: 40,
        marginRight: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
})