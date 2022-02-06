<template>
  <div class="app">
    <div class="game-container">
      <div class="header">
        <SquareItem value="x" />
        <SquareItem value="x" />
      </div>
      <q-space />
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
import SquareItem from "./components/SquareItem.vue";

export default defineComponent({
  components: { Board, ScoreTable, SquareItem },
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
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem;
    .header {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
