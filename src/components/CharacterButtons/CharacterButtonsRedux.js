import { connect } from 'react-redux';
import { guessLetter } from '../../actions';
import CharacterButtonsContainer from './CharacterButtonsContainer';

const mapStateToProps = state => ({
    guessedLetters: state.currentWord.guessedLetters,
    guessingState: state.guessingState
})

const mapDispatchToProps = dispatch => ({
    guessLetter: letter => dispatch(guessLetter(letter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterButtonsContainer)
