import React, { Component } from 'react'
import Card from './Card'
import Result from './Result'

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
        // TODO : navigate back to the deck for this.props.title deck
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

export default Quiz