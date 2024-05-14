<template>
  <div class="form-wrap" v-if="store.isInputComplete">
    <fieldset class="form-address">
      <label class="form-address-label" for="address">
        <span>郵便番号を入力してください</span>
      </label>
      <input v-model="address" name="address" id="address" type="number" class="form-address-input" />
      <button
        type="button"
        :disabled="!formCheck"
        @click="submitAddress()"
        class="btn btn-primary btn-submit px-5 py-2"
      >
        表示する
      </button>
    </fieldset>

    <div class="address-view">
      {{ addressView }}
    </div>
  </div>
  <div v-else>
    <p>まずは<router-link to="/datasourceid">こちら</router-link>から、認証情報を入力してください。</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import requestApi from "@/utils/requestApi";
import { createToaster } from "@meforma/vue-toaster";
import { useClientId } from "../stores/clientId";
const store = useClientId();
const toaster = createToaster();

let address = ref();
let addressView = ref("ここに住所が表示されます");

const formCheck = computed(() => {
  if (address.value && String(address.value).length === 7) {
    return true;
  } else {
    return false;
  }
});

const submitAddress = async () => {
  const getApiUrl = `https://zipcloud.ibsnet.co.jp/api/search?zipcode=` + address.value;
  addressView.value = "通信中";

  try {
    const response = await requestApi(getApiUrl, "GET");

    // エラー対応
    if (!response) {
      toaster.show("エラーが発生しました。再読み込みをして解決されないようでしたらお問合せください。", {
        duration: 5000,
        type: "error",
      });
      return;
    }

    addressView.value = response.results[0].address1 + response.results[0].address2 + response.results[0].address3;
  } catch (error) {
    addressView.value = "エラーが発生しました。正しい郵便番号か、ご確認をお願いいたします。";
    console.log(error);
  }
};
</script>

<style scoped lang="scss">
.form-wrap {
  padding: 40px 0;
}
.form-address-label,
.form-address-input {
  display: block;
  margin-bottom: 20px;
}
.address-view {
  margin-top: 40px;
  padding: 15px;
  background-color: #f5f5f5;
  font-size: 1.4rem;
}
</style>
