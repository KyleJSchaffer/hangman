import React from 'react'

//Renders the corresponding ascii hangman display for the given number of wrong guesses
const HangmanDisplay = props => {
    switch (props.wrongGuesses) {
        case 0:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 1:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 2:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 3:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`  \\|         | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 4:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 5:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`  /          | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 6:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{`   0        | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`  / \\        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 7:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{` . 0        | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`  / \\        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 8:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{` . 0 .      | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`  / \\        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 9:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{` . 0 .      | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`_/ \\        | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        case 10:
            return (
                <div style={{ whiteSpace: 'pre' }}>
                    <div>{`   -------- `}</div>
                    <div>{`   |         | `}</div>
                    <div>{` . 0 .      | `}</div>
                    <div>{`  \\|/        | `}</div>
                    <div>{`_/ \\_      | `}</div>
                    <div>{`             | `}</div>
                    <div>{`            __|__`}</div>
                </div>
            )
        default:
            return (
                <div>
                    Hangman Display Not Found
                </div>
            )
    }
}

export default HangmanDisplay