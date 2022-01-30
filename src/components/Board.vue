<template>
  <div class="board shadow-1">
    <SquareItem
      v-for="squareIndex in gameSquare.length"
      :key="squareIndex"
      :value="gameSquare[squareIndex - 1]"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SquareItem, { SquareItemValue } from "./SquareItem.vue";

export default defineComponent({
  components: { SquareItem },
  setup() {
    const gameSquare = ref<SquareItemValue[]>([
      "x",
      "o",
      "",

      "",
      "",
      "",

      "",
      "",
      "",
    ]);

    return {
      gameSquare,
    };
  },
});
</script>

<style lang="scss">
.board {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 0.5rem;
  width: 500px;
  height: 100%;
  padding: 1rem;
  margin-right: 1rem;
  background: #fff;
}
</style>
