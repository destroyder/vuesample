<template>
  <form class="login">
    <div class="form-title">
      <Heading1 title="サンプルサイト" />
      <div class="login-read">
        <p>
          このサイトはVueを使用して、コンポーネントの作成、routing、外部APIの連携を実施したサンプルサイトです。<br />
          <a href="https://github.com/destroyder/vuesample/tree/main">こちら</a>にソースコードを公開しています。<br />
        </p>
        <p>下記からvuesampleと入力することでログインできます。</p>
        <p>また以前作成したデザイン一覧は<router-link to="/design">こちら</router-link>から閲覧できます。</p>
      </div>
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
import { useClientId } from "../stores/clientId";
const store = useClientId();
const router = useRouter();
const message = ref("");
const username = ref("");
const password = ref("");

onMounted(async () => {
  // bearerを削除
  localStorage.removeItem("bearer");
  // storeの状態を初期化
  store.falseState();
});

// メソッド: onSubmit
const onSubmit = async (e: any) => {
  e.preventDefault();
  const passInput = "vuesample";
  if (username.value === passInput && password.value === passInput) {
    localStorage.setItem("bearer", "loginOk");
    router.push({ path: "/datasourceid" });
  } else {
    message.value = "認証できませんでした。入力情報が正しいかご確認ください。入力情報が正しい場合はお問合せください。";
  }
};
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  max-width: 420px;
  max-height: 420px;
  display: flex;
  flex-wrap: wrap;
  margin: clamp(20px, 15%, 100px) auto 0;
  &-read {
    border: 1px solid #f0cec6;
    padding: 20px 10px 5px;
    background-color: #faf0ee;
    margin-bottom: 20px;
  }
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
