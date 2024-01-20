<template>
  <div class="paginator">
    <button class="btn-action" type="button" @click="openModal">モーダルのテスト</button>
  </div>

  <Teleport to="body">
    <div v-if="modalOpen" class="modal_status">
      <div
        class="modal_status_overlay"
        @click.self="
          {
            modalOpen = false;
          }
        "
      >
        <div class="modal_status_content no_overflow">
          <MappingSetting @modalCancel="cancelFlag" :number="propGroup.number" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import MappingSetting from "@/components/MappingSetting.vue";
import { ref } from "vue";

// contact or company
const propGroup = defineProps({
  number: {
    type: Number,
    required: true,
  },
});

let modalOpen = ref(false);
const openModal = () => {
  modalOpen.value = true;
};

// 子コンポーネントのキャンセルボタン
const cancelFlag = (value: boolean) => {
  if (value) {
    modalOpen.value = false;
  }
};
</script>

<style lang="scss" scoped>
.paginator {
  width: 210px;
  button {
    cursor: pointer;
  }
  .active {
    font-weight: bold;
    cursor: default;
  }
}
</style>
