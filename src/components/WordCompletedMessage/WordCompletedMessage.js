import React from 'react';

//Renders the message for a completed word along with the button to trigger the next word
const WordSuccessMessage = props =>
    <div>
        <h1>The word "{props.word}" was successfully guessed in {props.guessedLetters.length} tries!</h1>
        <button onClick={props.nextWord}>Next Word</button>
        <p>(press enter for the next word)</p>
    </div>

export default WordSuccessMessage;