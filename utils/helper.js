

export function formatDeckWithKey(deck) {
    return {
        key: deck['title'],
        title: deck['title'],
        numOfCards: deck['questions'].length
    }
}

export function formatDeck(deck) {
    return {
        title: deck['title'],
        numOfCards: deck['questions'].length 
    }
}