import { createRouter, createWebHashHistory } from "vue-router";
import ContactView from "../views/ContactView.vue";
import DataSourceIdView from "../views/DataSourceIdView.vue";
import ExplanationView from "../views/ExplanationView.vue";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "top",
    component: LoginView,
    meta: {
      title: "Vueサンプルサイトとお店のデータ連携",
      desc: "Vueサンプルサイトとお店のデータ連携",
      hideHeaderSidebar: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      title: "ログイン | Vueサンプルサイトとお店のデータ連携",
      desc: "ログイン | Vueサンプルサイトとお店のデータ連携",
      hideHeaderSidebar: true,
    },
  },
  {
    path: "/contact",
    name: "index",
    component: ContactView,
    meta: {
      title: "Vueサンプルサイトとお店のデータ連携",
      desc: "Vueサンプルサイトとお店のデータ連携",
      hideHeaderSidebar: false,
    },
  },
  {
    path: "/explanation",
    name: "explanation",
    component: ExplanationView,
    meta: {
      title: "Vueサンプルサイトとお店のデータ連携",
      desc: "Vueサンプルサイトとお店のデータ連携",
      hideHeaderSidebar: false,
    },
  },
  {
    path: "/datasourceid",
    name: "datasourceid",
    component: DataSourceIdView,
    meta: { title: "Data Source ID入力", desc: "Data Source ID入力", hideHeaderSidebar: false },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
    meta: { title: "ページが存在しません。", desc: "ページが存在しません。", hideHeaderSidebar: false },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
