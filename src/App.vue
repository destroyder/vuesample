<template>
  <div :class="{ ly_container: !shouldHideHeaderSidebar }">
    <Header v-if="!shouldHideHeaderSidebar" />
    <Sidebar v-if="!shouldHideHeaderSidebar" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { watch, ref } from "vue";
import Header from "./components/Header.vue";
import Sidebar from "./components/Sidebar.vue";
import checkLogin from "@/utils/checkLogin";
import { useRoute } from "vue-router";
const shouldHideHeaderSidebar = ref(false);
const route = useRoute();

watch(route, (to) => {
  // sidebarの非表示
  if (to.meta.hideHeaderSidebar) {
    shouldHideHeaderSidebar.value = true;
  } else {
    // ログイン済みかチェック
    checkLogin();
    // sidebarの表示
    shouldHideHeaderSidebar.value = false;
  }
});
</script>
