import { connect } from 'react-redux';
import { wordCompleted, wordFailed, endGame } from '../../actions'
import GameScreenContainer from './GameScreenContainer';

const mapStateToProps = state => ({
    guessingState: state.guessingState,
    word: state.currentWord.word,
    revealedLetters: state.currentWord.revealedLetters,
    guesses: state.currentWord.guessedLetters.length,
    wrongGuesses: state.currentWord.wrongGuesses,
    guessesAllowed: state.guessesAllowed,
    timeLeft: state.timer.timeLeft,
    timedMode: state.timer.timedMode
})

const mapDispatchToProps = dispatch => ({
    wordCompleted: (word, guesses, wrongGuesses, revealedLetters) => dispatch(wordCompleted(word, guesses, wrongGuesses, revealedLetters)),
    wordFailed: (word, guesses, wrongGuesses, revealedLetters) => dispatch(wordFailed(word, guesses, wrongGuesses, revealedLetters)),
    endGame: (word, guesses, wrongGuesses, revealedLetters) => dispatch(endGame(word, guesses, wrongGuesses, revealedLetters))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameScreenContainer)