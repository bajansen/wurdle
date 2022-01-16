import { WURDEN } from "../constants/wurdlist";
import { VALIDGUESSES } from "../constants/validGuesses";

export const isWordInWordList = (word: string) => {
  return (
    WURDEN.includes(word.toLowerCase()) ||
    VALIDGUESSES.includes(word.toLowerCase())
  );
};

export const isWinningWord = (word: string) => {
  return solution === word;
};

export const getWordOfDay = () => {
  // January 1, 2022 Game Epoch
  const epochMs = 1641013200000;
  const now = Date.now();
  const msInDay = 86400000;
  const index = Math.floor((now - epochMs) / msInDay);
  //const index = 249;

  return {
    solution: WURDEN[index].toUpperCase(),
    solutionIndex: index,
  };
};

export const { solution, solutionIndex } = getWordOfDay();
