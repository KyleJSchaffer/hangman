import { connect } from 'react-redux';
import WrongGuesses from './WrongGuesses'

const mapStateToProps = state => ({
    wrongGuesses: state.currentWord.wrongGuesses,
    guessedLetters: state.currentWord.guessedLetters,
    guessesAllowed: state.guessesAllowed
})

export default connect(
    mapStateToProps
)(WrongGuesses)