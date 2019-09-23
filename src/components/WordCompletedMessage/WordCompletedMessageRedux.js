import { connect } from 'react-redux';
import { nextWord } from '../../actions';
import WordCompletedMessageContainer from './WordCompletedMessageContainer';

const mapStateToProps = state => ({
    word: state.currentWord.word,
    guessedLetters: state.currentWord.guessedLetters
})

const mapDispatchToProps = dispatch => ({
    nextWord: () => dispatch(nextWord())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordCompletedMessageContainer)