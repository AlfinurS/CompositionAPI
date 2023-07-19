<template>
  <div class="input-component">
    <div><component :is="icon" /></div>
    <input
      v-model="data"
      @input="onInput"
      @change="onChange"
      :type="type"
      class="input-component__input"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconSearch from "@/components/icons/iconSearch.vue";

export default defineComponent({
  name: "InputComponent",
  emits: ["onInput", "onChange"],
  components: {
    iconSearch,
  },
  props: {
    dataProps: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  data() {
    return {
      data: this.dataProps,
    };
  },
  methods: {
    onInput(): void {
      this.$emit("onInput", this.data);
    },

    onChange(): void {
      this.$emit("onChange", this.data);
    },
  },

  watch: {
    dataProps(newValue) {
      this.data = newValue;
    },
  },
});
</script>

<style lang="scss" scoped>
.input-component {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0px 15px;
  min-height: 40px;
  box-sizing: border-box;
  flex-direction: row;
  align-items: center;
  background-color: #fff;
  border-radius: 30px;
  font-size: 17px;
  font-weight: 400;
  color: #f4f5f5;
  &__input {
    border: none;
    background: transparent;
    margin-left: 8px;
    outline: none;
    width: 100%;
    height: 100%;
    padding-top: 8px;
    padding-bottom: 8px;
  }
}
</style>
