import { DEFAULT_GAME_LENGTH } from '../constants'
import { START_GAME, TIMER_TICK, CHANGE_GAME_LENGTH, TOGGLE_TIMED_MODE } from "../actions"

const initialState = {
    startTime: DEFAULT_GAME_LENGTH,
    timeLeft: DEFAULT_GAME_LENGTH,
    timedMode: true
}

//Stores the time left and time allowed for a game. If timedMode is false the games will not be timed
export const timer = (state = initialState, action) => {
    switch (action.type) {
        case START_GAME:
            return {
                startTime: state.startTime,
                timeLeft: state.startTime,
                timedMode: state.timedMode
            }

        case TIMER_TICK:
            return {
                startTime: state.startTime,
                timeLeft: state.timeLeft - 1,
                timedMode: state.timedMode
            }

        case CHANGE_GAME_LENGTH:
            //Set the start time to 1 if the action attempts to set if below 1
            let newStartTime;
            if(action.startTime < 1){
                newStartTime = 1;
            }else{
                newStartTime = action.startTime
            }
            return {
                startTime: newStartTime,
                timeLeft: state.timeLeft,
                timedMode: state.timedMode
            }

            case TOGGLE_TIMED_MODE:
                return{
                    startTime: state.startTime,
                    timeLeft: state.timeLeft,
                    timedMode: !state.timedMode
                }

        default:
            return state
    }
}