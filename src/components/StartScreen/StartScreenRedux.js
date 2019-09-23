import { connect } from 'react-redux';
import StartScreen from './StartScreen'
import { startGame } from '../../actions';

const mapStateToProps = state => ({
    startTime: state.timer.startTime,
    timedMode: state.timer.timedMode
})

const mapDispatchToProps = dispatch => ({
    startGame: () => dispatch(startGame())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StartScreen);