import React from 'react'

//Populate an array with each letter of the alphabet
const ALPHABET_ARRAY = [];
for (let i = 0; i < 26; i++) {
    ALPHABET_ARRAY.push(String.fromCharCode(65 + i))
}

//Renders a button for each letter of the alphabet. The button is disabled if the letter is in the guessedLetter array
const CharacterButtons = props =>
    <div>
        {ALPHABET_ARRAY.map((character, index) => (
            <button
                key={index}
                onClick={() => props.guessLetter(character)}
                disabled={props.guessedLetters.includes(character.toLowerCase())}>
                {character}
            </button>
        ))}
        <p>(The keyboard can also be used to guess letters)</p>
    </div>

export default CharacterButtons;