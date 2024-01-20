<template>
  <div>
    <form>
      <div class="form-wrap">
        <fieldset class="form-datasource">
          <label class="form-datasource-label" for="client_id">
            <span>testと入力してください</span>
          </label>
          <input v-model="client_id" name="client_id" id="client_id" type="text" class="hs-input" inputmode="text" />

          <button
            type="button"
            :disabled="!formCheck"
            class="btn btn-primary btn-submit px-5 py-2"
            @click="submitForm()"
          >
            送信する
          </button>
        </fieldset>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { createToaster } from "@meforma/vue-toaster";
import { useClientId } from "../stores/clientId";
const toaster = createToaster();
const okValue = "test";
const store = useClientId();

let client_id = ref();

const formCheck = computed(() => {
  if (client_id.value === okValue) {
    return true;
  } else {
    return false;
  }
});

const submitForm = async () => {
  // storeを更新
  store.trueState();
  console.log(store.isInputComplete);

  toaster.show("入力が完了しました。テスト連携ページにてご利用ください。", {
    duration: 5000,
    type: "success",
  });
};
</script>

<style scoped lang="scss">
.form {
  text-align: center;
  width: 85%;
}

.form-datasource {
  text-align: left;
  margin-bottom: 2rem;
  padding: 2rem;
  border: 1px solid #cbd6e2;
  &-label {
    display: block;
    margin-bottom: 0.25rem;
  }
  input[type="text"] {
    font-size: 1rem;
    line-height: 1.375;
    border: 1px solid;
    border-color: #cbd6e2;
    border-radius: 0.1875rem;
    width: 100%;
    padding: 0.5625rem 0.625rem;
    margin-bottom: 1rem;
  }
}
</style>
