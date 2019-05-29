import React, { Component } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, KeyboardAvoidingView} from 'react-native'
import { black, red, purple, white } from '../utils/colors'

function SubmitBtn({ onPress, isDisabled }) {
    return (
        <TouchableOpacity
         style={styles.submitBtn}
         onPress={onPress}
         disabled={isDisabled()}>
             <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
    )
}

class AddDeck extends Component {

    state = {
        text: ''
    }

    onSubmit = () => {
        console.log(this.state.text)
        // TODO : Add to the store
        // TODO : add to the database
        // TODO : navigate to the deck
    }
    
    isDisabled = () => {
        return this.state.text === ''
    }

    render() {
        return (
            <KeyboardAvoidingView behavior='padding' style={styles.formContainer}>
                <Text style={styles.text}>What is the title</Text>
                <Text style={styles.text}>of your new</Text>
                <Text style={[styles.text, { paddingBottom: 20}]}>deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    placeholder={`Deck Title`}
                />
                <SubmitBtn onPress={this.onSubmit} isDisabled={this.isDisabled}/>    
            </KeyboardAvoidingView>
        )
    }
}

export default AddDeck

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
})