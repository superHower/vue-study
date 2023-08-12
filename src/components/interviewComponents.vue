<script>
export default {
  name: "interviewComponents",
}
</script>

<template>
  <div class="interviewComponents">
    <router-view></router-view>
  </div>
</template>


<style lang="less" scoped>
.interviewComponents {
  width: 500px;
  height: 600px;
  margin: 300px auto 20px;
  border-radius: 10px;
  border: red solid 3px;

}
</style>