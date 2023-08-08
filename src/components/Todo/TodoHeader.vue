<template>
   <!-- 输入框 -->
  <header class="header">
    <h2>小黑记事本</h2>
    <input placeholder="请输入任务" class="new-todo" v-model="todoName" @keyup.enter="handleAdd"/>
    <button class="add" @click="handleAdd">添加任务</button>

  </header>
</template>

<script>
export default {
  data(){
    return {
      todoName:''
    }
  },
  methods:{
    handleAdd(){
      // console.log(this.todoName)
      if(this.todoName.trim() === '')
      {
        alert('任务名称不能为空')
        return
      }
      this.$emit('add',this.todoName)
      this.todoName = ''
    }
  }
}
</script>

<style scoped>
.header {
  text-align: center;
  display: block;
}

.header input {
  height: 45px;
  border-radius: 10px;
}
.header button{
  height: 50px;
  border-radius: 10px;
  background-color: #ff8500;
}
</style>