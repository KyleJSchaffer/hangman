import React from 'react';
import './HiddenWord.css';

//Renders the hidden word with '_' replacing any letters that have not been guessed yet
const HiddenWord = props =>
    <div className='hidden-word-container'>
        <p>
            {
                Array.from(props.word).map((letter, index) => {
                    if(props.revealedLetters.includes(index)){
                        return letter
                    }else{
                        return '_ '
                    }
                })
            }
        </p>
    </div>

export default HiddenWord