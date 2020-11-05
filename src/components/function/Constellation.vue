<template>
  <div>
    <h2>Constellation</h2>
    <hr>
    <router-link to="/users/1" class="link">星座１</router-link>
    <router-link to="/users/2" class="link">星座２</router-link>
    <router-link to="/users/3" class="link">星座3</router-link>
    <router-link to="/users/4" class="link">星座4</router-link>
    <router-link to="/users/5" class="link">星座5</router-link>
    <hr>
    <h1>星座 No. {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>

<style scoped>
.link {
  padding: 10px;
}
</style>