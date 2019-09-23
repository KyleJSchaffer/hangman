import React from 'react';
import WordFailedMessage from './WordFailedMessage';

class WordFailedMessageContainer extends React.Component {
    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    //Attach key press event listener on mount
    componentDidMount() {
        document.body.addEventListener('keydown', this.handleKeyPress, false)
    }

    //Remove key press event listener on unmount
    componentWillUnmount() {
        document.body.removeEventListener('keydown', this.handleKeyPress, false)
    }

    //Calls the next word action when the 'Enter' key is pressed
    handleKeyPress(e) {
        if (e.keyCode === 13) {
            this.props.nextWord()
        }
    }

    //Renders the word failed component
    render() {
        return (
            <WordFailedMessage word={this.props.word} nextWord={this.props.nextWord} />
        )
    }
}

export default WordFailedMessageContainer;