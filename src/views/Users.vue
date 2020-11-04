<template>
  <div>
    <h2>Users</h2>
    <hr>
    <router-link to="/users/1" class="link">ユーザー１</router-link>
    <router-link to="/users/2" class="link">ユーザー２</router-link>
    <router-link to="/users/3" class="link">ユーザー3</router-link>
    <router-link to="/users/4" class="link">ユーザー4</router-link>
    <router-link to="/users/5" class="link">ユーザー5</router-link>
    <hr>
    <h1>User No. {{ id }}</h1>
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