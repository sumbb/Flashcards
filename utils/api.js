import { AsyncStorage } from 'react-native'

const initialData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'A library for managing user interfaces'
        },
        {
          question: 'Where do you make Ajax requests in React?',
          answer: 'The componentDidMount lifecycle event'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.'
        }
      ]
    }
}

export const FLASHCARD_STORAGE_KEY = 'FLASHCARD_STORAGE_KEY'

export function getDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
            .then(formatFlashcardData)
}


function formatFlashcardData(results) {
    if(results === null) {
        AsyncStorage.setItem(FLASHCARD_STORAGE_KEY, JSON.stringify(initialData))
        return initialData
    } else {
        return JSON.parse(results)
    }
}

export function saveDeckTitle(title) {
    const newDeck = {
        title: title,
        questions: []
    }
    
    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
        [title]: newDeck
    }))
}

export function addCardToDeck(title, card) {
    
    AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
            .then(formatFlashcardData)
            .then((decks) => {
                if(decks[title] !== null) {

                    const updatedDeck = {
                        title: title,
                        questions: decks[title]['questions'].concat([card])
                    }
            
                    return AsyncStorage.mergeItem(FLASHCARD_STORAGE_KEY, JSON.stringify({
                        [title]: updatedDeck
                    }))
                }
            })
}

