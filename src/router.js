import Vue from "vue"; //npmパッケージをプロジェクトで使う
import Router from "vue-router"; //ルーターをインストール
import Home from "./views/Home.vue";
import Users from "./views/Users.vue";
import ToDo from "./views/ToDo.vue";

Vue.use(Router); //VueがRouterを使えるようになる

// Routerの中身をVuejsに適応させる
// main.jsで摘出する
export default new Router({
  mode: "history",
  // URLとコンポーネントをマッピングさせる
  routes: [
    {path: '/', component: Home},
    {path: '/users/:id', component: Users, props: true},
    {path: '/todo', component: ToDo}
  ]
});