import { DEFAULT_GUESSES_ALLOWED } from '../constants'
import { CHANGE_GUESSES_ALLOWED } from '../actions';

const intitialState = DEFAULT_GUESSES_ALLOWED;

//Stores the number of guesses before a word is failed
export const guessesAllowed = (state = intitialState, action) => {
    switch (action.type) {
        case CHANGE_GUESSES_ALLOWED:
            return action.guesses
        default:
            return state;
    }
} 