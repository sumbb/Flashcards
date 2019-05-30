import React, { Component } from 'react'
import Card from './Card'
import Result from './Result'
import { connect } from 'react-redux'

class Quiz extends Component {
    state = {
        numOfAnswered: 0,
        numOfCorrectAnswers: 0,
        isQuestion: true
    }

    onCorrectAnswer = () => {
        this.setState((prevState) => ({
            numOfAnswered: prevState.numOfAnswered + 1,
            numOfCorrectAnswers: prevState.numOfCorrectAnswers + 1,
            isQuestion: true
        }))
    }

    onIncorrectAnswer = () => {
        this.setState((prevState) => ({
            numOfAnswered: prevState.numOfAnswered + 1,
            isQuestion: true
        }))
    }

    onRestartQuiz = () => {
        this.setState({
            numOfAnswered: 0,
            numOfCorrectAnswers: 0,
            isQuestion: true
        })
    }

    onBackToDeck = () => {
        this.setState({
            numOfAnswered: 0,
            numOfCorrectAnswers: 0
        })
        const deck = {
            title: this.props.title
        }
        this.props.navigation.navigate(
            'Deck',
            { deck: deck }
        )
    }

    flipCard = () => {
        this.setState((prevState) => ({
            isQuestion: prevState.isQuestion ? false : true
        }))
    }

    render() {
        const { questions } = this.props
        const totalCards = questions.length
        const { numOfCorrectAnswers, numOfAnswered, isQuestion } = this.state
    
        if( numOfAnswered < totalCards ) {
            return <Card question={questions[numOfAnswered]} numOfAnswered={numOfAnswered} isQuestion={isQuestion} totalCards={totalCards} onCorrect={this.onCorrectAnswer} onIncorrect={this.onIncorrectAnswer} flipCard={this.flipCard}/>
        } else {
            return <Result totalCards={totalCards} numOfCorrectAnswers={numOfCorrectAnswers} onRestartQuiz={this.onRestartQuiz} onBackToDeck={this.onBackToDeck}/>
        }
    }
}

function mapStateToProps(decks, { navigation }) {
    const { deck } = navigation.state.params
    return {
        title: deck.title,
        questions: decks[deck.title]['questions']
    }
}
export default connect(mapStateToProps)(Quiz)