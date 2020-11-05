<template>
  <div>
    <h1>Function</h1>
    <nav>
      <router-link to="/" class="link">Library</router-link>
      <router-link to="/users/1" class="link">Vue Router</router-link>
      <router-link to="/todo" class="link">To do</router-link>
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
  margin: 5px;
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
nav > .link:hover {
  opacity: 0.8;
}
nav > .link:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none;
}
</style>
