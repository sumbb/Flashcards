import React, { Component } from 'react'
import { Text, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native'
import { white, black, purple } from '../utils/colors'
import AppButton from './AppButton'
import { connect } from 'react-redux'
import { formatDeck } from '../utils/helper'
import { addQuestion } from '../actions';

class AddCard extends Component {

    state = {
        questionText: '',
        answerText: ''
    }

    onTextChange = ( text, isQuestionText )  => {
        this.setState((prevState) =>({
            questionText: isQuestionText ? text : prevState.questionText,
            answerText: isQuestionText ? prevState.answerText : text
        }))
    }

    onSubmit = () => {
        const { dispatch, deck } = this.props
        const { questionText, answerText } = this.state
        const question = {
            question: questionText,
            answer: answerText
        }

        // Add card to the Deck in db 
        dispatch(addQuestion(deck.title, question))
        this.props.navigation.navigate(
            'Deck',
            { deck: deck } // will be changed later 
        )
    }

    isDisabled = () => {
        return this.state.questionText === '' || this.state.answerText === ''
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
                <Text style={styles.textStyle}>Question:</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.onTextChange(text, true)}
                    value={this.state.questionText}
                    placeholder={`Question`}
                />
                <Text style={styles.textStyle}>Answer:</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.onTextChange(text, false)}
                    value={this.state.answerText}
                    placeholder={`Answer`}
                />
                <AppButton 
                    onPress={this.onSubmit} 
                    isDisabled={this.isDisabled}
                    btnStyle={styles.submitBtn}
                    btnTextStyle={styles.submitBtnText} 
                    text={'Submit'}
                    />
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(decks, { navigation }) {
    const { deck } = navigation.state.params
    return {
        deck: formatDeck(decks[deck.title])
    }
}

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        flex: 1,
        padding: 30,
        marginTop: 100
    },
    textStyle: {
        fontSize: 25,
        marginTop: 25,
    },
    textInput: {
        height: 45,
        borderColor: black, 
        borderWidth: 1,
        width: 350,
        borderRadius: 8,
        marginTop: 30
    },
    submitBtn: {
        backgroundColor: purple,
        borderRadius: 7,
        height: 48,
        marginLeft: 40,
        marginRight: 40,
        width: 250,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
})