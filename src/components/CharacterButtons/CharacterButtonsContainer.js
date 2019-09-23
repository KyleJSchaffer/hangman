import React from 'react';
import CharacterButtons from './CharacterButtons';
import { GuessingState } from '../../constants'

class CharacterButtonsContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    //Attach event listener on mount
    componentDidMount() {
        document.body.addEventListener('keypress', this.handleKeyPress, false)
    }

    //Unattach event listener on unmount
    componentWillUnmount() {
        document.body.removeEventListener('keypress', this.handleKeyPress, false)
    }

    //Calls the guessLetter action when a letter key is pressed
    handleKeyPress(e) {
        const keyCode = e.keyCode;
        if ((keyCode >= 97 && keyCode <= 122) || (keyCode >= 65 && keyCode <= 90)) {
            if (!this.props.guessedLetters.includes(e.key.toLowerCase())) {
                this.props.guessLetter(e.key)
            }
        }
    }

    render() {
        return (
            <CharacterButtons guessLetter={this.props.guessLetter} guessedLetters={this.props.guessedLetters} />
        )
    }
}

export default CharacterButtonsContainer;