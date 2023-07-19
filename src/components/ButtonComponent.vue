<template>
  <button
    @click="onClick"
    :type="type"
    :disabled="disabled"
    :class="classProps"
    class="button-component"
  >
    <div><component :is="icon" /></div>
    {{ text }}
    <div><component :is="iconRight" /></div>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconArrow from "@/components/icons/iconArrow.vue";

export default defineComponent({
  name: "ButtonComponent",
  emits: ["onClick"],
  components: {
    iconArrow,
  },
  props: {
    classProps: {
      type: String,
      default: "primary-btn",
    },
    icon: {
      type: String,
      default: undefined,
    },
    iconRight: {
      type: String,
      default: undefined,
    },
    type: {
      type: String,
      default: "button",
    },
    text: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props, { emit }) {
    const onClick = (): void => {
      emit("onClick");
    };

    return {
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.button-component {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0px 78px;
  min-height: 56px;
  box-sizing: border-box;
  align-items: center;
  border-radius: 10px;
  border: none;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
.button-component:hover {
  opacity: 0.7;
}
</style>
