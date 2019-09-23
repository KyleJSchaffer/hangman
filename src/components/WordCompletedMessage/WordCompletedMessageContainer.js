import React from 'react';
import WordCompletedMessage from './WordCompletedMessage';

class WordCompletedMessageContainer extends React.Component {
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

    //Renders the word completed component
    render() {
        return (
            <WordCompletedMessage word={this.props.word} guessedLetters={this.props.guessedLetters} nextWord={this.props.nextWord} />
        )
    }
}

export default WordCompletedMessageContainer;