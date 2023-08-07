<template>
  <!-- 列表区域 -->
  <section class="todo-main">
    <ul class="todo-list">
      <li class="todo" v-for="(item, index) in list" :key="item.id">
        <div class="view">
          <span class="index">{{ index + 1 }}.</span>
          <label>{{ item.name }}</label>
          <button class="destroy" @click="handleDel(item.id)">删除</button>
        </div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    handleDel(id) {
      this.$emit('del', id)
    },
  },
}
</script>

<style>

.todo-main .todo-list {
  height: 280px;
  padding: 10px;
  border-radius: 5px;
}
.todo-main li {
  padding: 10px;
  margin: 0 0 0 -20px;
  height: 40px;

  border-bottom:#f5e79e solid 1px;


}

.todo-main li button {
  float: right;

}
</style>