<template>
  <div class="base-dialog-wrap" v-show="visible">
    <div class="base-dialog">
      <div class="title">
        <h3>温馨提示：</h3>
        <button class="close" @click="closeDialog">x</button>
      </div>
      <div class="content">
        <p>你确认要清空任务吗么？</p>
      </div>
      <div class="footer">
        <button @click="clear">确认</button>
        <button @click="closeDialog">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: Boolean,
  },


  methods:{
    clear()  {
      this.$emit('clear')
      this.$emit('update:visible',false)
    },
    closeDialog(){
      // 通知父组件更新isVisible的值
      this.$emit('update:visible',false)
    }
  }
}
</script>

<style scoped>
.base-dialog-wrap {
  width: 300px;
  height: 200px;
  box-shadow: 2px 2px 2px 2px #ccc;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 0 10px;
}

.base-dialog .title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #000;
}
.base-dialog .content {
  margin-top: 38px;
}
.base-dialog .title .close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  line-height: 10px;
}
.footer {
  display: flex;
  position: relative;
  top: -20px;
  //border: red solid 3px;
  justify-content: space-evenly;
  margin-top: 26px;
  height: 50px;
  background-color: white;
}
.footer button {
  width: 80px;
  height: 40px;
}
.footer button:nth-child(1) {
  margin-right: 10px;
  cursor: pointer;
}
</style>
<script setup>
</script>