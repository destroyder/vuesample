<template>
  <div class="flow text-center">
    <img :src="imgUrl" width="900" height="623" loading="lazy" class="flow_img" alt="" />
  </div>
</template>

<script setup lang="ts">
import imgUrl from "../assets/img/noah.jpg";
</script>

<style lang="scss" scoped>
.flow {
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  margin-bottom: 100px;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
}
.flow_img {
  max-width: 100%;
  height: auto;
}
</style>
