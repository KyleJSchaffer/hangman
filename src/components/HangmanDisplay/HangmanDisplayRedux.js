import {connect} from 'react-redux';
import HangmanDisplay from './HangmanDisplay';


const mapStateToProps = state =>({
    wrongGuesses: state.currentWord.wrongGuesses
})

export default connect(
    mapStateToProps
)(HangmanDisplay)