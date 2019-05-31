import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { black, red, purple, white } from '../utils/colors'
import { connect } from 'react-redux'
import { getArrayOfDeckTitles, deckPresent } from '../utils/helper'
import { addDeck } from '../actions';
import { saveDeckTitle } from '../utils/api'
import AppButton from './AppButton';

class AddDeck extends Component {

    state = {
        text: ''
    }

    onSubmit = () => {
        const { text } = this.state
        const { dispatch, deckTitles } = this.props
        if(deckPresent(text, deckTitles)) {
            alert(`${text} is present, add another title`)
            
            
        } else {
            dispatch(addDeck(text))
            saveDeckTitle(text)

            const deck = {
                title: text,
                questions: []
            }
            this.props.navigation.navigate(
                'Deck',
                { deck: deck }
            )
        }
        this.setState({
            text: ''
        })
        
    }
    
    isDisabled = () => {
        return this.state.text === ''
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
                <View style={styles.firstContainer}>
                    <Text style={styles.text}>What is the title</Text>
                    <Text style={styles.text}>of your new</Text>
                    <Text style={[styles.text, { paddingBottom: 20}]}>deck?</Text>
                </View>
                <View style={styles.secondContainer}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={`Deck Title`}
                />
                <AppButton 
                    onPress={this.onSubmit} 
                    isDisabled={this.isDisabled} 
                    btnStyle={styles.submitBtn} 
                    btnTextStyle={styles.submitBtnText} 
                    text={'Create Deck'} 
                />
                </View>
                    
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(decks) {
    return {
        deckTitles: getArrayOfDeckTitles(decks)
    }
}

export default connect(mapStateToProps)(AddDeck)

const styles = StyleSheet.create({
    formContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        width: 400,
        padding: 30

    },
    text: {
        fontSize: 40,
    },
    textInput: {
        height: 45,
        borderColor: black, 
        borderWidth: 1,
        width: 350,
        borderRadius: 8,
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
        marginTop: 20
    },
    submitBtnText: {
        color: white,
        fontSize: 22,
        textAlign: 'center'
    },
    firstContainer: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 20
    },
    secondContainer: {
        flex: 1,
        alignItems: 'center'
    }
})