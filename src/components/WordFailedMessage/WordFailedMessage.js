import React from 'react'

//Renders the message for a completed word along with the button to trigger the next word
const WordFailedMessage = props =>
    <div>
        <h1>Failed to guess the word "{props.word}".</h1>
        <button onClick={props.nextWord}>Next Word</button>
        <p>(press enter for the next word)</p>
    </div>

export default WordFailedMessage