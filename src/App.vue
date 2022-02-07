<template>
  <div class="app">
    <div class="game-container">
      <div>
        <SquareItem
          :value="player"
          :class="{
            'align-left': player === 'x',
            'align-right': player === 'o',
          }"
        />
      </div>
      <q-space />
      <Board
        :gameSquare="gameSquare"
        :winner="winner"
        :gameOver="gameOver"
        @onSquareClicked="onSquareClicked"
        @restartGame="restartGame"
      />
      <ScoreTable
        :gameScore="gameScore"
        @restartGame="restartGame"
        @resetScore="resetScore"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "./components/Board.vue";
import ScoreTable from "./components/ScoreTable.vue";
import { useGameLogic } from "./composables/game-logic";
import SquareItem from "./components/SquareItem.vue";

export default defineComponent({
  components: { Board, ScoreTable, SquareItem },
  setup() {
    const {
      gameSquare,
      winner,
      gameOver,
      gameScore,
      player,
      onSquareClicked,
      restartGame,
      resetScore,
    } = useGameLogic();

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
    .align-left {
      float: left;
    }
    .align-right {
      float: right;
    }
  }
}
</style>
