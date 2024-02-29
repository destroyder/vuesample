<template>
  <main>
    <div class="wrapper">
      <ConfirmText @errorJudge="setErrorView" />
      <Heading1 title="郵便番号から住所を検索" />
      <div>
        <InputAddress />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import InputAddress from "../components/InputAddress.vue";
import ConfirmText from "../components/ConfirmText.vue";
import Heading1 from "../components/Heading1.vue";

const components = {
  InputAddress,
  ConfirmText,
  Heading1,
};

defineComponent({ components });

// ConfirmTextエラーの際に非表示にする
const errorView = ref(true);
const setErrorView = async (value: boolean) => {
  if (value) {
    errorView.value = true;
  } else {
    errorView.value = false;
  }
};

onMounted(() => {
  setErrorView(errorView.value);
});
</script>

<style scoped>
.datainput {
  border: 1px solid #cbd6e2;
  padding: 30px;
  background-color: #f5f8fa;
}
.datainput_wrap {
  display: flex;
  justify-content: space-between;
}
</style>
