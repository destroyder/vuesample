<template>
  <!-- // TODO: 読み込み前はloadingを入れる -->

  <h2 class="fs-5 fw-bold mb-4">モーダルの確認</h2>

  <p class="mapping-errors-text">Vue3のteleportの確認用です。機能には全く関係なしです。</p>

  <div class="mapping-btn-wrap">
    <button class="btn btn-primary px-5 py-2 fs-6 cancel" @click="$emit('modalCancel', true)">閉じる</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const mappingError = ref(false);
</script>

<style lang="scss" scoped>
.mapping {
  display: flex;
  width: 100%;
}
.mapping-ss {
  width: 100%;
}

.mapping-btn-wrap {
  display: flex;
  justify-content: center;
  padding-left: 12px;
  button {
    margin: 0;
  }
  .cancel {
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
  }
  &-space {
    width: 58px;
  }
}

.alignment_input {
  border: 1px solid #cbd6e2;
  padding: 30px;
  margin-bottom: 10px;
  background-color: #fff;
  text-align: center;
  width: 48%;
}
.input-radio-list {
  list-style: none;
  display: flex;
  padding: 0.5rem 0 0;
  li {
    width: 50%;
    max-width: 350px;
  }
  input {
    vertical-align: -1px;
    margin-right: 4px;
  }
}
.btn-wrap {
  display: flex;
  justify-content: space-between;
}
</style>
