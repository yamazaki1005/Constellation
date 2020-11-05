<template>
  <div id="todo">
    <h1>
      My Todos
      <span class="info">({{ remaining }}/{{ todos.length }})</span>
    </h1>
    <ul v-if="todos.length">
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.isDone">
          <span :class="{done: todo.isDone}">{{ todo.title }}</span>
        <span @click="deleteItem(index)" class="command">[x]</span>
      </li>
    </ul>
    <ul v-else>
      <li>
        Nothing to do, yay!
      </li>
    </ul>
     <form v-on:submit.prevent="addItem">
      <input type="text" v-model="newItem">
      <input type="submit" value="Add">
    </form>
  </div>
</template>

<style scoped>
#todo input[type="text"] {
  padding: 2px;
}
#todo > ul {
  padding: 0;
  font-size: 24px;
  line-height: 1.5em;
}
.command {
  font-size: 16px;
  cursor: pointer;
}
#todo li > span {
  margin: 0px 7px;
}
#todo li > span.done {
  text-decoration: line-through;
  color: #bbb;
}
h1 {
  border-bottom: 1px solid white;
  margin-bottom: 0;
  padding-bottom: 5px;
}
.info {
  font-size: 18px;
  color: #bbb;
}
</style>

<script>
export default {
  data: function() {
    return {
      newItem: "",
      todos: [{
        title: 'task1',
        isDone: false
      },
      {
        title: 'task2',
        isDone: false
      },
      {
        title: 'task3',
        isDone: true
      }
      ]
    }
  },
  methods: {
    addItem: function() {
      var item = {
        title: this.newItem,
        isDone: false
      }
      this.todos.push(item);
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm('削除しますか？')) {
        this.todos.splice(index, 1);
      }
    }
  },
  computed: {
    remaining: function() {
      var items = this.todos.filter(function(todo) {
        return !todo.isDone;
      });
      return items.length;
    }
  }
}
</script>


