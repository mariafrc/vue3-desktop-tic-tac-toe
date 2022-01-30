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

export function useGameLogic() {
  const gameSquare = ref<SquareItemValue[]>([
    "",
    "",
    "",

    "",
    "",
    "",

    "",
    "",
    "",
  ]);

  const player = ref<SquareItemValue>("x");

  function onSquareClicked(index: number) {
    gameSquare.value[index] = player.value;
    player.value = player.value === "x" ? "o" : "x";
    const winner = checkForWinner();
    if (winner) {
      console.log("game over");
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
    return null;
  }

  return {
    gameSquare,
    onSquareClicked,
  };
}
