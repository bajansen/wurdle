import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'

export const shareStatus = (guesses: string[], lost: boolean) => {
  navigator.clipboard.writeText(
    `Wurdle ${solutionIndex} ${lost ? 'X' : guesses.length}/6\n\n` +
      generateEmojiGrid(guesses) +
      '\nhttps://wurdle.benno.frl'
  )
}

export const generateEmojiGrid = (guesses: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((letter, i) => {
          switch (status[i]) {
            case 'correct':
              return '🟩'
            case 'present':
              return '🟨'
            default:
              return '⬜'
          }
        })
        .join('')
    })
    .join('\n')
}
