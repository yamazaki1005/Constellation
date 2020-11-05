<template>
  <div id="test">
    <h1>Vueのテストフィールド</h1>
    <h1>My Todos</h1>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">({{index}}){{ todo }}</li>
    </ul>
     <form>
      <input type="text">
      <input type="submit" value="Test">
    </form>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      todos: [
        'task 1',
        'task 2',
        'task 3'
      ]
    }
  }
}
</script>

<style scoped>
#test {
  color: white;
  text-align: center;
}
</style>
