import { connect } from 'react-redux';
import HiddenWord from './HiddenWord';

const mapStateToProps = state => ({
    word: state.currentWord.word,
    revealedLetters: state.currentWord.revealedLetters
})

export default connect(
    mapStateToProps
)(HiddenWord);