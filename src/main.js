import Vue from 'vue';
import App from "./App.vue";
// import router from "./router";
// import store from "./store";
import particlesJS from 'particles.js'
Vue.use(particlesJS)


import VueTyperPlugin from 'vue-typer';
import VueParticles from 'vue-particles'
Vue.use(VueTyperPlugin)
Vue.use(VueParticles)
// import smoothScroll from 'vue-smoothscroll'
// Vue.use(smoothScroll)

Vue.config.productionTip = false;

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount("#app");


particlesJS('particles-js',  
  {
    "particles": {
      "number": {
        // シェイプ数
        "value": 75,
        "density": {
          // シェイプの表示間隔設定
          "enable": true,
          // シェイプの表示間隔
          "value_area": 400
        }
      },
      "color": {
        // シェイプのカラー
        "value": "#fff"
      },
      "shape": {
        // シェイプの形
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        // directionで方向を変更
        "direction": "bottom",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 75
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
  }
);