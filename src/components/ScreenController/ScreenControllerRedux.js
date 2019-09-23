import { connect } from 'react-redux';
import ScreenController from './ScreenController';

const mapStateToProps = state => ({
    gameState: state.gameState
});

export default connect(
    mapStateToProps
)(ScreenController)
