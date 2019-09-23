import { connect } from 'react-redux';
import { nextWord } from '../../actions'
import WordFailedMessageContainer from './WordFailedMessageContainer';

const mapStateToProps = state => ({
    word: state.currentWord.word
});

const mapDispatchToProps = dispatch => ({
    nextWord: () => dispatch(nextWord())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(WordFailedMessageContainer)