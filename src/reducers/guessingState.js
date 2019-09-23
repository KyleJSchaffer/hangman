import { GuessingState } from '../constants';
import { WORD_COMPLETED, NEXT_WORD, WORD_FAILED, START_GAME } from '../actions';

const initialState = GuessingState.GUESSING;

//Stores whether a word is being guessed, or if it was failed or completed
export const guessingState = (state = initialState, action) => {
    switch (action.type) {
        case WORD_COMPLETED:
            return GuessingState.WORD_COMPLETED;
        case WORD_FAILED:
            return GuessingState.WORD_FAILED;
        case NEXT_WORD:
            return GuessingState.GUESSING;
        case START_GAME:
            return GuessingState.GUESSING;
        default:
            return state;
    }
}