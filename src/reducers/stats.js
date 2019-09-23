import { WORD_COMPLETED, WORD_FAILED, START_GAME, END_GAME } from "../actions";

const initialState = {
    completedWords: [],
    failedWords: [],
    totalGuesses: 0,
    totalWrongGuesses: 0,
    totalRevealedLetters: 0
}

//Stores the cumulative stats for a game. It updates after each word and is reset at the start of a new game
export const stats = (state = initialState, action) => {
    switch (action.type) {
        //Reset the completed and failed word lists
        case START_GAME:
            return {
                ...initialState
            }

        //Add the word to the completed words list and update the stats
        case WORD_COMPLETED:
            return {
                completedWords: [...state.completedWords, action.word],
                failedWords: state.failedWords,
                totalGuesses: state.totalGuesses + action.guesses,
                totalWrongGuesses: state.totalWrongGuesses + action.wrongGuesses,
                totalRevealedLetters: state.totalRevealedLetters + action.revealedLetters
            }

        //Add the word to the failed words list and update the stats
        case WORD_FAILED:
            return {
                completedWords: state.completedWords,
                failedWords: [...state.failedWords, action.word],
                totalGuesses: state.totalGuesses + action.guesses,
                totalWrongGuesses: state.totalWrongGuesses + action.wrongGuesses,
                totalRevealedLetters: state.totalRevealedLetters + action.revealedLetters
            }

        //Update the stats at the end of the game. The last word does not get added to the list of failed words
        case END_GAME:
            return {
                completedWords: state.completedWords,
                failedWords: [...state.failedWords],
                totalGuesses: state.totalGuesses + action.guesses,
                totalWrongGuesses: state.totalWrongGuesses + action.wrongGuesses,
                totalRevealedLetters: state.totalRevealedLetters + action.revealedLetters
            }

        default:
            return state;
    }
}