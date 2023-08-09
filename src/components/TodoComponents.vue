<template>
  <div class="todo">
    <TodoHeader @add="handleAdd"></TodoHeader>
    <TodoMain :list="list" @del="handleDel"></TodoMain>
    <TodoFooter :list="list" @clear="handleClear"></TodoFooter>
    <TodoNews></TodoNews>
  </div>
</template>

<script>
import TodoHeader from "@/components/Todo/TodoHeader.vue";
import TodoMain from "@/components/Todo/TodoMain.vue";
import TodoFooter from "@/components/Todo/TodoFooter.vue";
import TodoNews from "@/components/Todo/TodoNews.vue";

export default {
  name: 'TodoComponents',


  data() {
    return {
      list: JSON.parse(localStorage.getItem('todoList')) || [
        {id: 1, name: '唱跳'},
        {id: 2, name: 'rap'},
        {id: 3, name: '打篮球'},
      ],
    }
  },
  methods: {
    handleAdd(todoName) {
      this.list.unshift({
        id:+new Date(),
        name: todoName
      })
    },
    handleDel(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    handleClear() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep:true,
      handler(newValue) {
        localStorage.setItem('todoList', JSON.stringify(newValue))
      }
    }
  },
  components:
      {
        TodoHeader,
        TodoFooter,
        TodoMain,
        TodoNews
      }
}
</script>



<style>
.todo {
  position: relative;

  width: 300px;
  height: 500px;
  margin: 50px;
  padding: 10px;
  background-color: skyblue;
}
</style>