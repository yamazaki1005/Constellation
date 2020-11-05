import Vue from 'vue';
import App from "./App.vue";
import Test from "./Test.vue";
import router from "./router";
// import store from "./store";
import particlesJS from 'particles.js'
import VueTyperPlugin from 'vue-typer';
import VueParticles from 'vue-particles'
import smoothScroll from 'vue-smoothscroll'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'


Vue.use(particlesJS)
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
Vue.use(smoothScroll)
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faUserSecret)
library.add(fas)

Vue.config.productionTip = false;

new Vue({
  Test,
  render: h => h(Test)
}).$mount("#test");

new Vue({
  router,
  // store,
  render: h => h(App) //仮想dom
}).$mount("#app");
