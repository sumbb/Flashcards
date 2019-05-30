

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

export function getArrayOfDeckTitles(decks) {
    return Object.keys(decks).map((key) => key.toLowerCase())
}

export function deckPresent(title, deckTitles) {
    return deckTitles.includes(title.toLowerCase())
}