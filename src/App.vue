<template>
  <div class="app">
    <div class="game-container">
      <Board />
      <ScoreTable />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Board from "./components/Board.vue";
import ScoreTable from "./components/ScoreTable.vue";

export default defineComponent({
  components: { Board, ScoreTable },
  setup() {},
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
