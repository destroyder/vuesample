<template>
  <div v-if="dataSourceErrorJudge" class="data-alart">
    <router-link to="/datasourceid">開始するためにページ</router-link
    >で入力してから、こちらのページに遷移をお願いします。
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { useClientId } from "../stores/clientId";

const dataSourceErrorJudge = ref(false);
const store = useClientId();

const dataSourceErrorJudgeEmits = defineEmits<{
  (e: "errorJudge", errorJudge: boolean): void;
}>();

// 認証情報 入力確認
const dataSourceError = async () => {
  if (!store.isInputComplete) {
    dataSourceErrorJudge.value = false;
    dataSourceErrorJudgeEmits("errorJudge", false);
    return;
  }
};

onBeforeMount(() => {
  dataSourceError();
});
</script>

<style scoped>
.data-alart {
  color: #8b343c;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 0.75rem 1.25rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
}
</style>
