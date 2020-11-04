<template>
  <div id="app">
    <Header id="header"></Header>
    <div class="res"><h1 class="res-title">Vue Learning</h1></div>
    <ResNav></ResNav>
    <div id="top">
      <Snow></Snow>
      <vue-particles class="particles"></vue-particles>
      <Typer></Typer>
    </div>

    <Memo id="memo"></Memo>

    <!-- <About id="about"></About> -->
    <Learning id="learning"></Learning>

    <!-- <Skill id="skill"></Skill> -->
    <!-- <Contact id="contact"></Contact> -->

    <Footer id="footer"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import ResNav from './components/ResNav.vue'
import Snow from './components/Snow.vue'
import Typer from './components/Typer.vue'
import Memo from './components/Memo.vue'
import Learning from './components/Learning.vue'
// import About from './components/About.vue'

import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    ResNav,
    Typer,
    Snow,
    Memo,
    Learning,
    Footer,
    // About,
    // Skill,
    // Contact
  },
  methods: {
    clickSmoothScroll (x) {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector(x),
        800,
        null,
        null,
        'y'
      )
    },
    beforeEnter() {
      this.$root.$emit("triggerScroll");
    },
    countUp: function(times) {
      this.number += 1 * times
    }
  }
};
</script>


<style>
body{
  margin: 0;
  background-color: #03121A;
  color: white;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
#app{
  font-family: 'Lato', 'Noto Sans JP', 'ヒラギノ角ゴ ProN', 'Hiragino Kaku Gothic ProN', 'メイリオ', Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic', sans-serif;
  font-style: italic;
  text-align: center;
}
#top{
  position: relative;
  /*background-image: url(./assets/yoru2.jpg);*/
  background-size: cover;
  height: 100vh;
}
#main{
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
}
.particles{
  z-index: 1;
  height: 100vh;
  background-color: transparent;
}
.res{
  display: none;
  background-color: #03111a;
}
.vue-typer .custom.char{
  color: aliceblue;
}

.nav-icon{
  font-size: 1.5em;
}
.comment{
  margin:5px 0;
  font-weight: 500;
  color: whitesmoke;
}
.link-content{
  color: whitesmoke;
  text-decoration: none;
  min-width: 8%;
  font-size: 10px;
  text-align: center;
}
.top-text{
  color: whitesmoke;
  font-size: 50px;
}
.icon{
  font-size: 0.8em;
}
.text{
    font-weight: 500;
}
.content-title {
  padding: 120px 0 20px 0;
  margin: 50px 20% 100px 20%;
  position: relative;
  font-size: 2em;
  color: rgb(120, 120, 184);
  border-bottom: rgba(61, 148, 211, 0.4) 3px solid;
}
@media screen and (max-width: 1200px) {
  .top-text{
    font-size: 35px;
  }
}
@media screen and (max-width: 768px){
  .top-text{
    font-size: 25px;
  }
  #header{
    display: none;
  }
  .res{
    display: contents;
    background-color: #03111a;
  }
  .content-title{
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 450px) {
  .top-text{
    font-size: 11px;
  }
  .vue-typer .custom.char{
    font-size: 24px;
  }
}
</style>