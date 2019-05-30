import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import AppButton from './AppButton'
import { white, black, red, purple } from '../utils/colors'
import { Ionicons, Entypo } from '@expo/vector-icons'


function EachResult({ numOfCorrectAnswers, totalCards, emojiName, text, secondText }) {
    return (
        <View style={styles.resultStyle}>
            <Entypo name={emojiName} size={100}/>
            <Text style={styles.firstText}>{text}</Text>
            <Text style={{fontSize: 20}}>{"You answered"}</Text>
            <Text style={styles.secondText}>{`${numOfCorrectAnswers} out of ${totalCards} questions correctly.`}</Text>
            <Text style={styles.thirdText}>{secondText}</Text>
        </View>
    )
}

class Result extends Component {
    render() {
        const { totalCards, numOfCorrectAnswers, onRestartQuiz, onBackToDeck } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.firstContainer}>
                    { totalCards === numOfCorrectAnswers 
                        ? <EachResult 
                            totalCards={totalCards}
                            numOfCorrectAnswers={numOfCorrectAnswers} 
                            emojiName={'emoji-happy'} 
                            text={'Congratulations!!'}
                            secondText={'You are a genius.'}
                          />
                        : <EachResult 
                            totalCards={totalCards} 
                            numOfCorrectAnswers={numOfCorrectAnswers} 
                            emojiName={'emoji-sad'} 
                            text={'Sorry'}
                            secondText={'Failure is first step towards success.'}
                           />
                    }
                </View>
                <View style={styles.secondContainer}>
                    <AppButton
                        onPress={onRestartQuiz}
                        isDisabled={false}
                        btnStyle={styles.retakeQuizBtn}
                        btnTextStyle={styles.retakeQuizBtnText} 
                        text={'Retake Quiz'} 
                    />
                    <AppButton
                        onPress={onBackToDeck}
                        isDisabled={false}
                        btnStyle={styles.backToDeckBtn}
                        btnTextStyle={styles.backToDeckBtnText} 
                        text={'Back to Deck'} 
                    />
                </View>
            </View>
        )
    }
}

export default Result

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        padding: 20
    },
    firstContainer: {
        flex: 2,
    },  
    secondContainer: {
        flex: 1,
    },
    retakeQuizBtn: {
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
    retakeQuizBtnText: {
        color: black,
        fontSize: 22,
        textAlign: 'center'
    },
    backToDeckBtn: {
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
    backToDeckBtnText: {
        color: black,
        fontSize: 22,
        color: white,
        textAlign: 'center'
    },
    resultStyle: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 80,
    },
    firstText: {
        fontSize: 30,
        marginTop: 20,
        marginBottom: 50,
        color: purple
    },
    secondText: {
        fontSize: 20,
        marginBottom: 50,
    },
    thirdText: {
        fontSize: 20,
    }
})