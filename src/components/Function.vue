<template>
  <div>
    <h1>Function</h1>
    <nav>
      <router-link to="/" class="link">Library</router-link>
      <router-link to="/users/1" class="link">Vue Router</router-link>
      <router-link to="/users/1" class="link coming-soon">Coming Soon</router-link>
    </nav>
    
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    toUsers() {
      this.$router.push('users');
    }
  }
}
</script>

<style>
nav > .link {
  padding: 13px;
  margin: 5px;
  background-color: rgb(119, 119, 173);
  color: white;
  border-radius: 20px;
  text-decoration-line: none;
}
nav > .coming-soon {
  padding: 5px;
  background-color: rgb(179, 179, 223) important!;
  cursor: not-allowed;
  color: black;
}
</style>