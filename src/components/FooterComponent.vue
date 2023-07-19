<template>
  <footer class="footer">
    <div class="footer__item">
      <iconMap />
      <span>карта</span>
    </div>
    <div class="footer__item">
      <div class="footer__item-wrapper">
        <div class="footer__item-dot footer__item-dot--red"></div>
        <iconChat />
      </div>
      <span>чаты</span>
    </div>
    <div class="footer__item">
      <div class="footer__item-wrapper">
        <div class="footer__item-dot footer__item-dot--black"></div>
        <iconMeets />
      </div>
      <span>мои встречи</span>
    </div>
    <div class="footer__item">
      <iconProfile />
      <span>профиль</span>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import iconMap from "@/components/icons/iconMap.vue";
import iconChat from "@/components/icons/iconChat.vue";
import iconMeets from "@/components/icons/iconMeets.vue";
import iconProfile from "@/components/icons/iconProfile.vue";

export default defineComponent({
  name: "FooterComponent",
  components: {
    iconMap,
    iconChat,
    iconMeets,
    iconProfile,
  },
});
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: row;
  margin-top: 14px;
  width: 375px;
  height: 80px;
  background-color: white;
  border-radius: 40px 40px 30px 30px;
  box-shadow: 0px 0px 13px 0px rgba(22, 22, 23, 0.26);
  padding-left: 45px;
  padding-right: 45px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  &__item {
    color: #1d1d1d;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    cursor: pointer;
    &-wrapper {
      position: relative;
    }
    &-dot {
      position: absolute;
      border-radius: 50%;
      top: 0px;
      right: 0px;
      width: 8px;
      height: 8px;
      z-index: 2;
      &--red {
        background-color: #ef7958;
        border: 2px solid white;
      }
      &--black {
        background-color: #1d1d1d;
        border: 2px solid white;
      }
    }
  }

  &__item :hover {
    opacity: 0.7;
  }
}
</style>
