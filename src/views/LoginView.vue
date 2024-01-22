<template>
  <form class="login">
    <div class="form-title">
      <Heading1 title="Vueサンプルサイト ログイン" />
    </div>
    <div class="form-group">
      <label for="exampleInputEmail1" class="mb-2">ユーザー名(vuesampleと入力してください)</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="ユーザー名"
        v-model="username"
      />
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1" class="mb-2">パスワード(vuesampleと入力してください)</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        placeholder="パスワード"
        v-model="password"
      />
    </div>
    <div v-if="message">
      <p class="text-danger">
        {{ message }}
      </p>
    </div>
    <div class="form-group mt-4">
      <button type="submit" @click="onSubmit" class="btn btn-primary w-100 mb-3">ログイン</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Heading1 from "../components/Heading1.vue";
import { useRouter } from "vue-router";
const router = useRouter();
const message = ref("");
const username = ref("");
const password = ref("");

onMounted(async () => {
  // bearerを削除
  localStorage.removeItem("bearer");
});

// メソッド: onSubmit
const onSubmit = async (e: any) => {
  e.preventDefault();
  if (username.value === "vuesample" && password.value === "vuesample") {
    localStorage.setItem("bearer", "loginOk");
    router.push({ path: "/datasourceid" });
  } else {
    message.value = "認証できませんでした。入力情報が正しいかご確認ください。入力情報が正しい場合はお問合せください。";
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 380px;
  height: 380px;
  display: flex;
  flex-wrap: wrap;
  margin: clamp(40px, 20%, 150px) auto 0;
}

.form-title {
  text-align: center;
  width: 100%;
}

.form-group {
  width: calc(100% - 80px);
  margin: 0 auto 1rem;
  button {
    padding: 10px;
  }
}
.form-text {
  display: block;
  margin-top: 0.25rem;
}
</style>
