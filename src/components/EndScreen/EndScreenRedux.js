import { connect } from 'react-redux';
import EndScreen from './EndScreen';
import { newGame } from '../../actions';

const mapStateToProps = state => ({
    completedWords: state.stats.completedWords,
    failedWords: state.stats.failedWords,
    totalGuesses: state.stats.totalGuesses,
    totalWrongGuesses: state.stats.totalWrongGuesses,
    totalRevealedLetters: state.stats.totalRevealedLetters,
    timedMode: state.timer.timedMode,
    timeExpired: state.timer.startTime - state.timer.timeLeft
});

const mapDispatchToProps = dispatch => ({
    newGame: () => dispatch(newGame())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EndScreen)