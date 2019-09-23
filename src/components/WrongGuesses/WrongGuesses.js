import React from 'react';

//Renders the number of wrong guesses along with a list of guessed letters
const WrongGuesses = props =>
    <div>
        <p>Wrong Guesses: {props.wrongGuesses}/{props.guessesAllowed}</p>
        <p>Guessed Letters: {props.guessedLetters.toString()}</p>
    </div>

export default WrongGuesses