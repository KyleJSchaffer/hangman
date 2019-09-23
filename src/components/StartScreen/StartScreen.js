import React from 'react';
import OptionsMenuRedux from '../OptionsMenu/OptionsMenuRedux';

//Renders the start screen message and the option menu component
const StartScreen = props =>
    <div>
        <h2>
            Win as many games of hangman as you can{props.timedMode && (` in ${props.startTime} seconds`)}.</h2>
        <button onClick={props.startGame}>Start Game</button>
        <OptionsMenuRedux />
    </div>

export default StartScreen