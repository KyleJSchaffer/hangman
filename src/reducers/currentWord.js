import { GUESS_LETTER, START_GAME, NEXT_WORD } from "../actions"
import RandomWord from 'random-words';

const initialState = {
    word: 'default',
    revealedLetters: [],
    guessedLetters: [],
    wrongGuesses: 0
}

//Gets a random word that is atleast 4 characters long and resets the guesses and revealed letters
const _getNewWord = () => {
    let word = RandomWord()
    while (word.length < 4) {
        word = RandomWord()
    }
    return {
        word: word,
        revealedLetters: [],
        guessedLetters: [],
        wrongGuesses: 0
    }
}

//Stores the current word along with the guesses and revealed letter for the word
export const currentWord = (state = initialState, action) => {
    switch (action.type) {

        case START_GAME:
            return _getNewWord();

        case NEXT_WORD:
            return _getNewWord();

        //Checks if the guessed letter is in the current word and updates the revealed and guessed letters
        case GUESS_LETTER:
            //Convert the word to an array of chars and compare the guessed letter to each element.
            let revealedLetters = [...state.revealedLetters];
            Array.from(state.word).forEach((letter, index) => {
                if (action.letter.toLowerCase() === letter.toLowerCase()) {
                    //Add the character to the revelead letter if there is a match
                    revealedLetters.push(index);
                }
            })
            //Increment wrong guesses if the word did not contain the guessed character
            let wrongGuesses = state.wrongGuesses;
            if (revealedLetters.length === state.revealedLetters.length) {
                wrongGuesses++
            }

            //Add the letter to the guessed letters
            let guessedLetters = [...state.guessedLetters, action.letter.toLowerCase()]

            return {
                word: state.word,
                revealedLetters: revealedLetters,
                guessedLetters: guessedLetters,
                wrongGuesses: wrongGuesses
            }

        default:
            return state
    }
}