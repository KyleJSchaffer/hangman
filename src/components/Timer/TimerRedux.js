import { connect } from 'react-redux';
import TimerContainer from './TimerContainer';
import { timerTick, endGame } from '../../actions';

const mapStateToProps = state => ({
    startTime: state.timer.startTime,
    timeLeft: state.timer.timeLeft,
});

const mapDispatchToProps = dispatch => ({
    tick: () => dispatch(timerTick()),
    endGame: () => dispatch(endGame())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TimerContainer);