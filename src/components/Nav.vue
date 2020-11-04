<template>
  <div>
    <router-link to="/" class="nav-button" @click="clickSmoothScroll(0)">Top</router-link>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#top')">Function</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#output')">Output</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#work')">#</a>
    <a href="#" class="nav-button" @click="clickSmoothScroll('#contact')">#</a>
  </div>
</template>


<script>
export default {
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
    }
  }
}
</script>

<style>
.nav-button{
  padding:10px;
  text-decoration: none;
  border-radius: 5px;
  margin-right:10px;
  margin-left: 10px;
  outline: none;
  color: whitesmoke;
}
</style>