import { AsyncStorage } from 'react-native'
export const FLASHCARD_STORAGE_KEY = 'FLASHCARD_STORAGE_KEY'

export function getDecks() {
    return AsyncStorage.getItem(FLASHCARD_STORAGE_KEY)
            .then(formatFlashcardData)
}

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

function formatFlashcardData(results) {
    if(results === null) {
        return initialData
    } else {
        return JSON.parse(results)
    }
}

