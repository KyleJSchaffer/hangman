import React from 'react';
import './EndScreen.css'

//Renders the stats for the game along with the list of completed and failed letters
const EndScreen = props =>
    <div>
        <h1>Game Over</h1>
        <div className='end-screen-container'>
            <div className='end-screen-column'>
                <h3>Stats</h3>
                <p>Words Completed: {props.completedWords.length}</p>
                <p>Words Failed: {props.failedWords.length}</p>
                {props.timedMode && <p>Time Expired: {props.timeExpired} seconds</p>}
                <p>Total Guesses: {props.totalGuesses}</p>
                <p>Total Wrong Guesses: {props.totalWrongGuesses}</p>
                <p>Guess Accuracy: {((1 - props.totalWrongGuesses / props.totalGuesses) * 100).toFixed(2)}%</p>
                <p>Total Letters Revealed: {props.totalRevealedLetters}</p>
            </div>

            <div className='end-screen-column completed-words-container'>
                <h3>Completed Words</h3>
                <ul>
                    {props.completedWords.map((word, index) => (<li key={index}>{word}</li>))}
                </ul>
            </div>

            <div className='end-screen-column failed-words-container'>
                <h3>Failed Words</h3>
                <ul>
                    {props.failedWords.map((word, index) => (<li key={index}>{word}</li>))}
                </ul>
            </div>
        </div>
        <button onClick={props.newGame}>Play Again</button>
    </div>

export default EndScreen;