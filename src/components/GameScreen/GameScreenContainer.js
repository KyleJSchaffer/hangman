import React from 'react';
import { GuessingState, GUESSES_ALLOWED } from '../../constants'
import HiddenWordRedux from "../HiddenWord/HiddenWordRedux";
import CharacterButtonsRedux from "../CharacterButtons/CharacterButtonsRedux";
import HangmanDisplayRedux from "../HangmanDisplay/HangmanDisplayRedux";
import TimerRedux from "../Timer/TimerRedux";
import WordCompletedMessageRedux from '../WordCompletedMessage/WordCompletedMessageRedux';
import WordFailedMessageRedux from '../WordFailedMessage/WordFailedMessageRedux';
import WrongGuessesRedux from '../WrongGuesses/WrongGuessesRedux';

//This component controls what content is displayed while the game is ongoing. It checks if the word has been correctly guessed,
// if the user is out of guesses, or if time has expired; and then displays the correct component
class GameScreenContainer extends React.Component {

    render() {

        //Call the word completed action if all the letters have been guessed
        if (this.props.revealedLetters.length === this.props.word.length && this.props.guessingState === GuessingState.GUESSING) {
            this.props.wordCompleted(this.props.word, this.props.guesses, this.props.wrongGuesses, this.props.revealedLetters.length)
        }

        //Calls the word failed action if the user is out of guesses
        if (this.props.wrongGuesses >= this.props.guessesAllowed && this.props.guessingState === GuessingState.GUESSING) {
            this.props.wordFailed(this.props.word, this.props.guesses, this.props.wrongGuesses, this.props.revealedLetters.length)
        }

        //Calls the end game function if time is expired
        if (this.props.timeLeft <= 0) {
            this.props.endGame(this.props.word, this.props.guesses, this.props.wrongGuesses, this.props.revealedLetters.length);
        }

        return (
            <div>
                {this.props.timedMode && <TimerRedux />}
                <HangmanDisplayRedux />
                {(() => {
                    switch (this.props.guessingState) {
                        //Render the hidden word, the hangman, and the character buttons if the word is still being guessed
                        case GuessingState.GUESSING:
                            return (
                                <div >
                                    <HiddenWordRedux />
                                    <WrongGuessesRedux />
                                    <CharacterButtonsRedux />
                                    <button onClick={() => this.props.wordFailed(this.props.word, this.props.guesses, this.props.wrongGuesses, this.props.revealedLetters.length)}>
                                        Give Up Word
                                    </button>
                                </div>
                            )
                        //Render the completed word message if the word was successfully guessed
                        case GuessingState.WORD_COMPLETED:
                            return (
                                <WordCompletedMessageRedux />
                            )
                        //Render the failed word message if the word was not guessed correctly
                        case GuessingState.WORD_FAILED:
                            return (
                                <WordFailedMessageRedux />
                            )
                    }
                })()}
                <button onClick={() => this.props.endGame(this.props.word, this.props.guesses, this.props.wrongGuesses, this.props.revealedLetters.length)}>End Game</button>
            </div>
        )
    }
}

export default GameScreenContainer;