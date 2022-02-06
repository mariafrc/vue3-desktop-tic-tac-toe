<template>
  <div class="board-content shadow-1">
    <SquareItem
      v-for="squareIndex in gameSquare.length"
      :key="squareIndex"
      :value="gameSquare[squareIndex - 1]"
      @onClick="onSquareClicked(squareIndex - 1)"
    />
    <div class="game-over-banner" v-if="gameOver" @click="onGameOverClicked()">
      <h2 class="winner">
        {{ winnerText }}
      </h2>
      <h2 class="restart">Click to restart</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { useGameLogic } from "../composables/game-logic";
import { computed, defineComponent } from "vue";
import SquareItem from "./SquareItem.vue";

export default defineComponent({
  components: { SquareItem },
  emit: ["onGameEnd"],
  setup(_, context) {
    const { gameSquare, winner, gameOver, onSquareClicked, resetGame } =
      useGameLogic();

    const winnerText = computed(() => {
      if (!winner.value) {
        return "No winner";
      }
      if (winner.value === "x") {
        return "Crosses win";
      }
      return "Circles win";
    });

    function onGameOverClicked() {
      context.emit("onGameEnd", winner.value);
      resetGame();
    }

    return {
      gameSquare,
      gameOver,
      winnerText,
      onSquareClicked,
      onGameOverClicked,
    };
  },
});
</script>

<style lang="scss">
.board-content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  padding: 1rem;
  background: #fff;
  .game-over-banner {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    background: #000000d6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
    .winner {
      margin: 0px;
      background: #fff;
      border-radius: 0.5rem;
      padding: 1rem;
      color: #22d69c;
    }
    .restart {
      color: #fff;
    }
  }
}
</style>
