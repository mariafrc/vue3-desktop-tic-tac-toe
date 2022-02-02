<template>
  <div class="app">
    <div class="game-container">
      <Board @onGameEnd="changeScore" />
      <ScoreTable :gameScore="gameScore" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Board from "./components/Board.vue";
import ScoreTable from "./components/ScoreTable.vue";
import { SquareItemValue } from "./composables/game-logic";

export default defineComponent({
  components: { Board, ScoreTable },
  setup() {
    const gameScore = ref({
      x: 0,
      o: 0,
    });

    function changeScore(winner: SquareItemValue) {
      if (winner) {
        gameScore.value[winner]++;
      }
    }

    return {
      gameScore,
      changeScore,
    };
  },
});
</script>

<style lang="scss">
body {
  margin: 0px;
}

.app {
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #22d69c;
  .game-container {
    display: flex;
    height: 500px;
  }
}
</style>
