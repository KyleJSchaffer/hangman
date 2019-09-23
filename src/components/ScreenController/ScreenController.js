import React from 'react';
import { GameStates } from '../../constants'
import StartScreenRedux from '../StartScreen/StartScreenRedux';
import EndScreenRedux from '../EndScreen/EndScreenRedux';
import GameScreenRedux from '../GameScreen/GameScreenRedux';

class GameDisplay extends React.Component {

    //Renders the correct screen component depending on the game state
    render() {
        if (this.props.gameState === GameStates.START_SCREEN) {
            return <StartScreenRedux />
        } else if (this.props.gameState === GameStates.GAME_IN_PROGRESS) {
            return <GameScreenRedux />
        } else if (this.props.gameState === GameStates.END_SCREEN) {
            return <EndScreenRedux />
        }
    }
}

export default GameDisplay;