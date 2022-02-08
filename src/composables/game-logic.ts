import { computed, onMounted, ref, watch } from "vue";

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
const INITIAL_SCORE = {
  x: 0,
  o: 0,
};

export function useGameLogic() {
  const gameSquare = ref<SquareItemValue[]>([...INITIAL_SQUARE]);
  const hasAvalaibleSquare = computed(() => gameSquare.value.some((s) => !s));

  const player = ref<SquareItemValue>("x");
  const gameOver = ref(false);
  const winner = ref<SquareItemValue>("");

  const gameScore = ref<{ x: number; o: number }>({ ...INITIAL_SCORE });
  onMounted(() => {
    const lastScore = localStorage.getItem("game-score");
    if (lastScore) {
      gameScore.value = JSON.parse(lastScore);
    }
  });
  watch(gameScore, () => {
    localStorage.setItem("game-score", JSON.stringify(gameScore.value));
  });

  function onSquareClicked(index: number) {
    gameSquare.value[index] = player.value;
    player.value = player.value === "x" ? "o" : "x";

    checkIfGameEnded();
  }

  function checkIfGameEnded() {
    const turnWinner = checkForWinner();
    if (turnWinner || !hasAvalaibleSquare.value) {
      winner.value = turnWinner;
      gameOver.value = true;
      if (turnWinner) {
        gameScore.value = {
          ...gameScore.value,
          [turnWinner]: gameScore.value[turnWinner] + 1,
        };
      }
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

  function restartGame() {
    gameSquare.value = [...INITIAL_SQUARE];
    winner.value = "";
    gameOver.value = false;
  }

  function resetScore() {
    gameScore.value = { ...INITIAL_SCORE };
  }

  return {
    gameSquare,
    winner,
    gameOver,
    gameScore,
    player,
    onSquareClicked,
    restartGame,
    resetScore,
  };
}
