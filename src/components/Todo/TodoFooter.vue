<template>
  <!-- 统计和清空 -->
  <footer class="footer" v-show="list.length > 0">
    <!-- 统计 -->
    <span class="todo-count">
      合 计:<strong> {{ list.length }} </strong>
    </span>
    <!-- 清空 -->
    <button class="clear-completed" @click="clear">清空任务</button>
    <button @click="openDialog">退出按钮</button>
    <!-- visible.sync="isShow"  => :visible="isShow" @update:isShow="isShow=$event" -->
    <BaseDialog :visible.sync="isShow" @clear="handleClear"></BaseDialog>
  </footer>
</template>

<script>
import BaseDialog from "@/components/Todo/BaseDialog.vue";
export default {
  components: {BaseDialog},
  // 自己的数据
  data() {
    return {
      isShow: false,
    }
  },
  // 父组件发过来的数据
  props: {
    list: {
      type: Array,
    },
  },
  methods:{
    clear(){
      this.$emit('clear') // 向通知父组件处理clear
    },
    handleClear() {
      this.$emit('clear')
    },
    openDialog() {
      this.isShow = true
      // console.log(document.querySelectorAll('.box'));
    },
  },

}
</script>

<style scoped>

.footer {
  height: 40px;
  border-radius: 10px;

  padding: 3px
}
.footer button {
  float: right;
  height: 30px;
  width: 70px;
  border-radius: 6px;
}
</style>