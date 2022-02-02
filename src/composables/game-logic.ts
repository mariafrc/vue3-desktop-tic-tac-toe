import { ref } from "vue";

export type SquareItemValue = "x" | "o" | "";

const WINNING_LINES: number[][] = [
  // rows
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // colomns
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // diagonals
  [0, 4, 8],
  [2, 4, 6],
];

const INITIAL_SQUARE: SquareItemValue[] = ["", "", "", "", "", "", "", "", ""];

export function useGameLogic() {
  const gameSquare = ref<SquareItemValue[]>([...INITIAL_SQUARE]);
  const freeSquare = ref(9);
  const gameOver = ref(false);
  const winner = ref<SquareItemValue>("");

  const player = ref<SquareItemValue>("x");

  function onSquareClicked(index: number) {
    gameSquare.value[index] = player.value;
    player.value = player.value === "x" ? "o" : "x";
    freeSquare.value--;

    checkIfGameEnded();
  }

  function checkIfGameEnded() {
    const _winner = checkForWinner();
    if (_winner || freeSquare.value === 0) {
      winner.value = _winner;
      gameOver.value = true;
    }
  }

  function checkForWinner() {
    const gameSquareValue = gameSquare.value;
    for (let winningLine of WINNING_LINES) {
      const [a, b, c] = winningLine;
      if (
        gameSquareValue[a] &&
        gameSquareValue[a] === gameSquareValue[b] &&
        gameSquareValue[a] === gameSquareValue[c]
      ) {
        return gameSquareValue[a];
      }
    }
    return "";
  }

  function resetGame() {
    gameSquare.value = [...INITIAL_SQUARE];
    winner.value = "";
    gameOver.value = false;
    freeSquare.value = 9;
  }

  return {
    gameSquare,
    winner,
    gameOver,
    onSquareClicked,
    resetGame,
  };
}
