<template>
  <div
    class="square-item shadow-1"
    :class="{ free: isFree }"
    @click="onClicked"
  >
    <q-icon name="close" size="8rem" v-if="value === 'x'" class="close-icon" />
    <q-icon
      name="circle"
      size="8rem"
      v-if="value === 'o'"
      class="circle-icon"
    />
  </div>
</template>

<script lang="ts">
import { SquareItemValue } from "../composables/game-logic";
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    value: {
      type: Object as PropType<SquareItemValue>,
      required: true,
    },
  },
  emits: ["onClick"],
  setup(props, context) {
    const isFree = computed(() => !!!props.value);
    function onClicked() {
      if (isFree.value) {
        setTimeout(() => {
          context.emit("onClick");
        }, 100);
      }
    }

    return {
      isFree,
      onClicked,
    };
  },
});
</script>

<style lang="scss">
.square-item {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3rem;
  &.free {
    cursor: pointer;
    background: #ffaeae;
    &:hover {
      background: #ff8383;
    }
  }

  .close-icon {
    color: #ff5252;
  }

  .circle-icon {
    color: #216ef9;
  }
}
</style>
