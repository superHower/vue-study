<template>
  <div class="my-tag">
    <input
      v-if="isEdit"
      v-focus
      ref="inp"
      :value="value"

      class="input"
      type="text"
      placeholder="输入标签"

      @blur="isEdit = false"
      @keyup.enter="handleEnter"
    />
    <div 
      v-else
      @dblclick="handleClick"
      class="text">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String // 接收传过来的数据
  },
  data () {
    return {
      isEdit: false
    }
  },
  methods: {
    handleClick () {
      this.isEdit = true      // 双击后，切换到显示状态
      //    (Vue是异步dom更新)
      // this.$nextTick(() => {     // 等dom更新完了，再获取焦点
      //   this.$refs.inp.focus()        // 立刻获取焦点
      // })

    },
    handleEnter (e) {

      if (e.target.value.trim() === '') // 非空处理
        return alert('标签内容不能为空')

      // 子传父，将回车时，[输入框的内容] 提交给父组件更新
      // 由于父组件是v-model，触发事件，需要触发 input 事件
      this.$emit('input', e.target.value)
      // 提交完成，关闭输入状态
      this.isEdit = false
    }
  }
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>