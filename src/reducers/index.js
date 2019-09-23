import { combineReducers } from 'redux';
import { gameState } from './gameState';
import { guessingState } from './guessingState';
import { guessesAllowed } from './guessesAllowed';
import { currentWord } from './currentWord';
import { timer } from './timer';
import { stats } from './stats';

export default combineReducers({
    gameState,
    currentWord,
    timer,
    guessingState,
    guessesAllowed,
    stats
})