import { GameStates } from '../constants';
import { START_GAME, END_GAME, NEW_GAME } from '../actions';

const initialState = GameStates.START_SCREEN;

//Stores the stage the game is in
export const gameState = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return GameStates.GAME_IN_PROGRESS
        case END_GAME:
            return GameStates.END_SCREEN
        case NEW_GAME:
            return GameStates.START_SCREEN
        default:
            return state
    }
}