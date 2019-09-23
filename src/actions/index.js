export const GUESS_LETTER = 'GUESS_LETTER';
export const START_GAME = 'START_GAME';
export const END_GAME = 'END_GAME';
export const NEW_GAME = 'NEW_GAME';
export const TIMER_TICK = 'TIMER_TICK';
export const CHANGE_GAME_LENGTH = 'CHANGE_GAME_LENGTH';
export const TOGGLE_TIMED_MODE = 'TOGGLE_TIMED_MODE';
export const CHANGE_GUESSES_ALLOWED = 'CHANGE_GUESSES_ALLOWED';
export const NEXT_WORD = 'NEXT_WORD';
export const WORD_COMPLETED = 'WORD_COMPLETED';
export const WORD_FAILED = 'WORD_FAILED';

export const guessLetter = letter => ({
    type: GUESS_LETTER,
    letter
})

export const startGame = () => ({
    type: START_GAME,
})

export const endGame = (word, guesses, wrongGuesses, revealedLetters) => ({
    type: END_GAME,
    word,
    guesses,
    wrongGuesses,
    revealedLetters
})

export const newGame = () => ({
    type: NEW_GAME
})

export const timerTick = () => ({
    type: TIMER_TICK
})

export const changeGameLength = (startTime) => ({
    type: CHANGE_GAME_LENGTH,
    startTime
})

export const toggleTimedMode = () => ({
    type: TOGGLE_TIMED_MODE
})

export const changeGuessesAllowed = (guesses) => ({
    type: CHANGE_GUESSES_ALLOWED,
    guesses
})

export const wordCompleted = (word, guesses, wrongGuesses, revealedLetters) => ({
    type: WORD_COMPLETED,
    word,
    guesses,
    wrongGuesses,
    revealedLetters
})

export const wordFailed = (word, guesses, wrongGuesses, revealedLetters) => ({
    type: WORD_FAILED,
    word: word,
    guesses,
    wrongGuesses,
    revealedLetters
})

export const nextWord = () => ({
    type: NEXT_WORD
})