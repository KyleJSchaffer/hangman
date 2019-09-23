import { connect } from 'react-redux';
import OptionsMenu from './OptionsMenu';
import { changeGameLength, toggleTimedMode, changeGuessesAllowed } from '../../actions';
import { guessesAllowed } from '../../reducers/guessesAllowed';

const mapStateToProps = state => ({
    startTime: state.timer.startTime,
    timedMode: state.timer.timedMode
})

const mapDispatchToProps = dispatch => ({
    changeGameLength: (gameLength) => dispatch(changeGameLength(gameLength)),
    toggleTimedMode: () => dispatch(toggleTimedMode()),
    changeGuessesAllowed: (guesses) => dispatch(changeGuessesAllowed(guesses))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OptionsMenu)