import Vue from "vue"; //npmパッケージをプロジェクトで使う
import Router from "vue-router"; //ルーターをインストール
import Top from "./components/function/Top.vue";
import LibraryUsed from "./components/function/LibraryUsed.vue";
import Constellation from "./components/function/Constellation.vue";
import ToDo from "./components/function/ToDo.vue";

Vue.use(Router); //VueがRouterを使えるようになる

// Routerの中身をVuejsに適応させる
// main.jsで摘出する
export default new Router({
  mode: "history",
  // URLとコンポーネントをマッピングさせる
  routes: [
    {path: '/', component: Top},
    {path: '/libraryused', component: LibraryUsed},
    {path: '/constellation/:id', component: Constellation, props: true},
    {path: '/todo', component: ToDo}
  ]
});