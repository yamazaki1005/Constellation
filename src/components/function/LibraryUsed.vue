<template>
  <div>
    <Snow></Snow>
    <vue-particles class="particles"></vue-particles>
    <Typer></Typer>
  </div>
</template>

<script>
import Snow from './Snow.vue'
import Typer from './Typer.vue'

export default {
  components: {
    Typer,
    Snow
  }
};
</script>

<style>
.particles{
  z-index: 1;
  height: 100vh;
  background-color: transparent;
}
</style>
