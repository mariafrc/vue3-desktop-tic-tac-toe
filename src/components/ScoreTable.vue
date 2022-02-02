<template>
  <div class="score-table shadow-2">
    <span> x: {{ gameScore.x }} </span>
    <span> o: {{ gameScore.o }} </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    gameScore: {
      type: Object as PropType<{ x: number; o: number }>,
      required: true,
    },
  },
  setup() {},
});
</script>

<style lang="scss">
.score-table {
  width: 20rem;
  height: 100%;
  background: #fff;
}
</style>
