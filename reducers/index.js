import {
    ADD_DECK,
    ADD_QUESTION,
    ADD_DECKS
} from '../actions'

export default function decks(state = {}, action) {
    switch (action.type) {
        case ADD_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case ADD_DECK:   
            return {
                ...state,
                ...action.deck
            }
        case ADD_QUESTION:
            return {
                ...state,
                [action.title]: {
                    title: action.title,
                    questions: state[action.title]['questions'].concat([action.question])
                }
            }    
        default :
            return state    
    }
}
