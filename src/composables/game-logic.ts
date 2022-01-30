import { ref } from "vue";

export type SquareItemValue = "x" | "o" | "";

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
  }

  return {
    gameSquare,
    onSquareClicked,
  };
}
