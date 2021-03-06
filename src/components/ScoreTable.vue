<template>
  <div class="score-table shadow-2">
    <div>
      <h4>Game Score</h4>
      <q-separator />
      <div class="score-container">
        <div class="score-item">
          <SquareItem value="x" />
          <p class="shadow-2">{{ gameScore.x }}</p>
        </div>
        <div class="score-item">
          <SquareItem value="o" />
          <p class="shadow-2">{{ gameScore.o }}</p>
        </div>
      </div>
    </div>

    <div>
      <h4>Options</h4>
      <q-separator />
      <div class="options-container">
        <q-btn
          push
          color="primary"
          label="Restart Game"
          @click="onRestartClicked"
        />
        <q-btn
          push
          color="primary"
          label="Reset Score"
          @click="onResetScoreClicked"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import SquareItem from "./SquareItem.vue";
import { useQuasar } from "quasar";

export default defineComponent({
  components: { SquareItem },
  props: {
    gameScore: {
      type: Object as PropType<{ x: number; o: number }>,
      required: true,
    },
  },
  emits: ["restartGame", "resetScore"],
  setup(_, context) {
    const $q = useQuasar();

    function onRestartClicked() {
      $q.dialog({
        title: "Confirmation",
        message: "Would you like to restart game?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        context.emit("restartGame");
      });
    }

    function onResetScoreClicked() {
      $q.dialog({
        title: "Confirmation",
        message: "Would you like to reset game score?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        context.emit("resetScore");
      });
    }

    return {
      onRestartClicked,
      onResetScoreClicked,
    };
  },
});
</script>

<style lang="scss">
.score-table {
  width: 20rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    margin: 0.5rem;
  }
  .score-container {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    p {
      font-size: xxx-large;
      text-align: center;
      border-radius: 0.3rem;
      margin-top: 0.5rem;
    }
  }

  .options-container {
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}
</style>
