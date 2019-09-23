import React from 'react';
import './OptionsMenu.css'

//Renders the inputs to change the game length and allowed wrong guesses
const OptionsMenu = props =>
    <div>
        <div className='options-menu-container'>
            <h4>Game Options</h4>
            <div className='options-list-container'>
                <p><input
                    type='checkbox'
                    checked={props.timedMode}
                    onChange={props.toggleTimedMode}
                >
                </input>Timed Mode</p>
                <p>Game Length <input
                    type='number'
                    value={props.startTime}
                    onChange={(e) => props.changeGameLength(e.target.value)}
                    disabled={!props.timedMode}>
                </input></p>
                <p>Wrong Guesses Allowed <select onChange={e => props.changeGuessesAllowed(e.target.value)}>
                    <option value='6'>6</option>
                    <option value='10'>10</option>
                </select></p>
            </div>
        </div>
    </div>

export default OptionsMenu